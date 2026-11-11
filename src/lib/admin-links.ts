import { AdminLink, DEFAULT_ADMIN_LINKS } from '@/constants/admin-links';

const REVALIDATE_SECONDS = 60;
const FETCH_TIMEOUT_MS = 5000;
const MAX_LINKS = 10;
const MAX_LENGTH = { label: 60, subtitle: 80, message: 500 } as const;
const PHONE_PATTERN = /^62\d{8,13}$/;
const INACTIVE_VALUES = new Set(['false', 'no', '0', 'off', 'tidak']);

/**
 * Admin links for the landing page, read from a Google Sheet (CSV) so the
 * client can edit them without a deploy. Falls back to the built-in defaults
 * when the sheet is not configured, unreachable, or has no valid rows.
 */
export async function getAdminLinks(): Promise<AdminLink[]> {
  const url = process.env.LINKS_SHEET_CSV_URL;
  if (!url) return DEFAULT_ADMIN_LINKS;

  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`sheet responded with ${res.status}`);

    // A sheet that is no longer shared answers 200 with an HTML sign-in page.
    const contentType = res.headers.get('content-type') ?? '';
    if (!contentType.includes('text/csv')) {
      throw new Error(`expected text/csv, got "${contentType}"`);
    }

    const links = parseAdminLinks(await res.text());
    if (links.length === 0) throw new Error('sheet has no valid rows');
    return links;
  } catch (error) {
    console.error('[admin-links] using default links:', error);
    return DEFAULT_ADMIN_LINKS;
  }
}

export function parseAdminLinks(csv: string): AdminLink[] {
  const [header, ...rows] = parseCsv(csv);
  if (!header) return [];

  const columns = header.map((name) => name.trim().toLowerCase());
  const cell = (row: string[], name: string) => {
    const index = columns.indexOf(name);
    return index === -1 ? '' : (row[index] ?? '').trim();
  };

  const links: AdminLink[] = [];
  rows.forEach((row, i) => {
    if (row.every((value) => value.trim() === '')) return;
    if (INACTIVE_VALUES.has(cell(row, 'active').toLowerCase())) return;

    const label = cell(row, 'label');
    const phone = normalizePhone(cell(row, 'phone'));
    if (!label || !phone) {
      console.warn(`[admin-links] skipped sheet row ${i + 2}: invalid label or phone`);
      return;
    }

    links.push({
      label: label.slice(0, MAX_LENGTH.label),
      subtitle: cell(row, 'subtitle').slice(0, MAX_LENGTH.subtitle) || undefined,
      phone,
      message: cell(row, 'message').slice(0, MAX_LENGTH.message) || undefined,
    });
  });

  return links.slice(0, MAX_LINKS);
}

/** Accepts "0856…", "+62 856-…", "62856…"; returns digits in 62… form or null. */
function normalizePhone(raw: string): string | null {
  // Reject anything that is not a plainly written number (e.g. "6.28E+12").
  if (!/^\+?[\d\s().-]+$/.test(raw)) return null;
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('0')) digits = `62${digits.slice(1)}`;
  return PHONE_PATTERN.test(digits) ? digits : null;
}

/** Minimal RFC 4180 parser: quoted fields, escaped quotes, newlines in quotes. */
function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let quoted = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (quoted) {
      if (char === '"' && text[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else {
      field += char;
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

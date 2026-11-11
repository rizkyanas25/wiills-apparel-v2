export interface AdminLink {
  label: string;
  subtitle?: string;
  /** WhatsApp number in international format, digits only (e.g. 6281234567890). */
  phone: string;
  /** Pre-filled chat message. Omit to open the chat with an empty input. */
  message?: string;
}

/**
 * Shown when the Google Sheet is not configured, unreachable, or has no valid rows.
 * Keep this in sync with the sheet so a fallback never shows outdated admins.
 */
export const DEFAULT_ADMIN_LINKS: AdminLink[] = [
  {
    label: 'ADMIN UPDATE PRODUKSI',
    phone: '6285607125828',
  },
  {
    label: 'ADMIN DESAIN DAN PEMESANAN 1',
    subtitle: 'FAST RESPONSE SORE-MALAM',
    phone: '6285888077334',
    message: 'Halo Wills, Info Pricelist Masing-Masing Type.',
  },
  {
    label: 'ADMIN DESAIN DAN PEMESANAN 2',
    subtitle: 'FAST RESPONSE PAGI-SIANG',
    phone: '6285887770338',
    message: 'Halo Wills, Info Pricelist Masing-Masing Type.',
  },
  {
    label: 'ADMIN SEWA JERSEY',
    phone: '6285777996670',
    message:
      'Haloo Admin Sewa Jersey, Apakah stok ready untuk Tanggal : …… ( Isi dengan Tgl Sewa )',
  },
];

export const buildWhatsAppUrl = ({ phone, message }: AdminLink): string => {
  const base = `https://api.whatsapp.com/send?phone=${phone}`;
  return message ? `${base}&text=${encodeURIComponent(message)}` : base;
};

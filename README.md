This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Admin links (Google Sheet)

The WhatsApp buttons on the landing page are read from a Google Sheet, so they can be edited without a deploy.

- Set `LINKS_SHEET_CSV_URL` to the sheet's CSV URL: `https://docs.google.com/spreadsheets/d/<SHEET_ID>/export?format=csv&gid=<GID>`. The sheet must be shared as "Anyone with the link: Viewer".
- Header row: `label`, `subtitle`, `phone`, `message`, `active`. Row order is display order.
- `phone`: format the column as plain text; `0856…`, `62856…` and `+62 856…` are accepted. `message` empty means no pre-filled chat text. `active` set to `FALSE` hides the row.
- Rows with an invalid `label` or `phone` are skipped. If the variable is unset, the sheet is unreachable, or no row is valid, the defaults in `src/constants/admin-links.ts` are shown.
- Changes appear within about a minute (`revalidate: 60` in `src/lib/admin-links.ts`).

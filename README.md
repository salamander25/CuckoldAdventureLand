# Hotwife Circle (MVP)

A private, verified lifestyle community for consenting adults. Built with Next.js + Supabase.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS (dark luxury theme)
- Supabase (Auth + Postgres + Storage)
- Vercel deployment

## Routes
`/`, `/age-gate`, `/apply`, `/login`, `/dashboard`, `/profile`, `/directory`, `/profile/[id]`, `/desire-test`, `/matches`, `/intro-requests`, `/admin`, `/privacy`, `/terms`, `/rules`

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy env values:
   ```bash
   cp .env.example .env.local
   ```
3. Fill Supabase keys in `.env.local`.
4. Run migrations in Supabase SQL editor using `supabase/migrations/20260429_initial.sql`.
5. Run dev server:
   ```bash
   npm run dev
   ```

## Supabase seed (first admin)
After a user signs up and gets a `profiles` row, run:
```sql
update profiles
set profile_type = 'Admin', approved = true
where id = '<USER_UUID>';
```

## Vercel deployment notes
1. Import repo in Vercel.
2. Add env vars from `.env.example`.
3. Deploy using default Next.js settings.
4. Ensure Supabase URL allows your Vercel domain in Auth redirect URLs.

## Safety / consent guardrails
- Consent-first only (18+ adults).
- No fake profiles / no auto messaging impersonation.
- No hidden admin access to private photos.
- Private photo access requires mutual grants.
- Admin actions are logged.


## Troubleshooting build failures
If `npm install` fails with `403 Forbidden` for `registry.npmjs.org`, this is an environment/network policy issue (proxy or registry ACL), not an application code error.

Checks:
```bash
npm config get registry
npm ping
```

Fixes:
- Ensure registry is `https://registry.npmjs.org/`.
- Remove restrictive corporate proxy/allowlist settings for npm scopes needed by this app.
- Re-run `npm install` once registry access is restored.

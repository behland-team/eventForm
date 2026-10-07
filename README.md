Behland Exhibition Registration — Next.js 15 + Tailwind CSS

Getting started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

Then open http://localhost:3004

Scripts

- dev: start Next.js in development
- build: build production bundle
- start: run production server
- lint: run ESLint
- format: format with Prettier
- typecheck: run TypeScript without emit

Structure

- src/app/page.tsx: Landing page with hero and decorative sand clock
- src/app/register/page.tsx: Accessible form with validation
- src/components/Header.tsx: Shared header navigation
- src/app/globals.css: Tailwind v4 setup and utilities

Tech

- Next.js App Router, TypeScript
- Tailwind CSS v4
- React Hook Form + Zod

Email delivery

- Configure SMTP before starting the app in production:
  - `SMTP_HOST`
  - `SMTP_PORT`
  - `SMTP_USER`
  - `SMTP_PASS`
  - `SMTP_SECURE` (`true` or `false`)
  - `SMTP_TLS_REJECT_UNAUTHORIZED` (`true` or `false`, defaults to `true`)
  - `EMAIL_FROM` (optional, falls back to `SMTP_USER`)

# eventForm

const res = await fetch("/api/register", {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(values),
});


Exhibition codes

- The `20261007140000_registration_codes` migration creates a pool of 1,000 unique five-digit codes.
- Before starting a deployed version, run `npm run prisma:generate` and `npx prisma migrate deploy`.
- `npm run codes:generate` initializes/fills the pool to 1,000 codes without changing existing codes or assignments. It does not generate another batch on every run.
- Each new registration and its code are saved in one transaction. A unique foreign key permanently binds each code to one registration. Existing registrations are retained; codes are assigned to new registrations.
- `POST /api/register` accepts required `fullName` and `email`, optional `phone`, and optional UUID `requestKey`. Reuse the same request key when retrying a submission to receive the original code.
- Successful responses contain `{ code, emailSent }`; invalid data returns 400, duplicate email or exhausted capacity returns 409, and temporary database failures return 503.
- The UI displays the code and replaces the registration button with «پنل یوزر», linking to `https://t.me/behland_bot?start`.
- When email is provided, the confirmation includes the code. An SMTP failure keeps the registration and code intact and is reported to the user. The bot link is the provided destination; the bot's implementation is outside this repository.
- Run `npm run test:codes` to verify pool size, parallel allocation, retry behavior, duplicate email handling, and pool exhaustion in an isolated SQLite database.


One-time code redemption API

`POST /api/codes/redeem` validates and immediately consumes an assigned code. There is no separate read-only validation step. Codes that have not been assigned to a visitor cannot be redeemed. The database retains the owner and consumption timestamp; used codes never return to the available pool.

This endpoint requires no authentication or API key. Send only the code in the JSON request body.

```bash
curl -X POST http://localhost:3004/api/codes/redeem \
  -H "Content-Type: application/json" \
  -d '{"code":"12345"}'
```

Successful first use (HTTP 200):

```json
{"valid":true,"code":"12345","registrationId":1}
```

Repeated use (HTTP 409):

```json
{"valid":false,"error":"CODE_ALREADY_USED"}
```

Other errors: HTTP 400 `INVALID_CODE_FORMAT` (send a five-digit string), HTTP 404 `CODE_NOT_FOUND` (unknown or unassigned), HTTP 503 `SERVICE_UNAVAILABLE` (temporary database failure). Responses are not cached. Exactly one of multiple concurrent calls with the same code can succeed. After a success, a repeated request is rejected even if the caller lost the original response.

Run `npm run prisma:generate` and `npx prisma migrate deploy` when deploying this change. `npm run test:codes` also verifies consumption, simultaneous reuse, requests without authentication, invalid input, and unassigned codes in a temporary database.


CORS: both `/api/register` and `/api/codes/redeem` accept cross-origin JSON POSTs. `OPTIONS` returns 204 with allowed methods `POST, OPTIONS`, allowed headers `Content-Type, Authorization`, and `Access-Control-Allow-Origin: *`. Successful and handled error responses include the same CORS headers. These endpoints use no cookies or browser credentials.

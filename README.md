# KioskReserve Local

Offline-first bookings and queueing for clinics and government offices.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16 (App Router)](https://nextjs.org) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) (strict mode) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) + CSS custom properties |
| Components | [ShadCN UI](https://ui.shadcn.com/) (Radix primitives) |
| Fonts | [Geist](https://vercel.com/font) (local npm package) |
| Validation | [Zod](https://zod.dev) — runtime schema validation |
| Logging | [Pino](https://getpino.io) — structured NDJSON logging |
| Icons | [Lucide React](https://lucide.dev) |

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in the values (all optional):

| Variable | Description | Default |
|---|---|---|
| `NODE_ENV` | Runtime environment | `development` |
| `NEXT_PUBLIC_APP_URL` | Public URL of the deployment | _(optional)_ |
| `KIOSK_API_URL` | Backend API base URL | _(optional)_ |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

### Linting & Formatting

```bash
npm run lint      # ESLint
npm run format    # Prettier
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Tailwind directives + HSL design-system tokens
│   ├── layout.tsx        # Root layout (Geist fonts, metadata, viewport)
│   └── page.tsx          # Landing page (Server Component)
├── components/
│   └── ui/               # ShadCN UI primitives (button, card, …)
├── config/
│   └── env.ts            # Validated env vars (Zod, safeParse)
├── lib/
│   ├── constants.ts      # App-wide magic strings and config values
│   ├── env.ts            # Primary env validation (Zod, safeParse)
│   ├── logger.ts         # Pino server logger (pretty dev / NDJSON prod)
│   └── utils.ts          # cn() helper (clsx + tailwind-merge)
├── types/
│   └── kiosk.ts          # Domain types, API envelopes, Zod form schemas
└── utils/
    └── logger.ts         # Contextual logger class (client/server aware)
```

## Architecture Decisions

- **`@/*` path alias** — All imports use `@/` instead of relative paths.
- **Server Components by default** — Pages are RSCs; client components opt-in with `"use client"`.
- **Zod `.safeParse()`** — Environment variables are validated at startup with descriptive error messages; the app refuses to start if required vars are missing or malformed.
- **Pino logger** — Development uses `pino-pretty` for human-readable output; production outputs raw NDJSON for log aggregators. Sensitive paths are redacted automatically.
- **Geist font (local)** — Uses the `geist` npm package instead of `next/font/google` to avoid external network requests at build time, enabling offline/CI builds.


# Studio Sicurezza Padalino - Monorepo

Monorepo per il sito web di Studio Sicurezza Padalino con separazione frontend (Cloudflare Pages) e backend (Cloudflare Workers).

## Struttura

```
studiopadalino/
├── apps/
│   ├── frontend/          # React/Vite → Cloudflare Pages
│   └── backend/           # Worker API → Cloudflare Workers
├── packages/
│   └── shared/            # Codice condiviso
└── pnpm-workspace.yaml    # pnpm workspaces
```

## Sviluppo Locale

### Frontend
```bash
pnpm dev:frontend
```

### Backend
```bash
pnpm dev:backend
```

## Build

### Frontend
```bash
pnpm build:frontend
```

### Backend
```bash
pnpm build:backend
```

## Deploy

### Frontend (Cloudflare Pages)
Deploy automatico su push a GitHub. Configurazione:
- Build command: `cd apps/frontend && pnpm build`
- Build output directory: `apps/frontend/dist`
- Root directory: `/`

### Backend (Cloudflare Workers)
Deploy automatico su push a GitHub. Configurazione:
- Deploy command: `cd apps/backend && npx wrangler deploy`
- Entry point: `src/index.ts`

## Tecnologie

### Frontend
- React 19
- Vite 7
- Tailwind CSS 4
- shadcn/ui
- Wouter (routing)

### Backend
- Cloudflare Workers
- KV (caching)
- TypeScript

## Licenza

MIT

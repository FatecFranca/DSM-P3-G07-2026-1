# Front-end AcademyFlow

Aplicação Next.js em TypeScript para o front-end do projeto AcademyFlow.

## Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Radix Slot
- Lucide React

## Configuração

Crie um arquivo `.env.local` com base em `.env.example`:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:8888
```

## Execução

```bash
npm install
npm run dev
```

## Testes e validação

```bash
npm run build
npx playwright test
```

Se for a primeira execução do Playwright nesta máquina:

```bash
npx playwright install chromium
```

## Estrutura

- `app/` páginas e layouts
- `components/` componentes reutilizáveis
- `lib/` helpers, tipos e integração com API
- `e2e/` testes Playwright

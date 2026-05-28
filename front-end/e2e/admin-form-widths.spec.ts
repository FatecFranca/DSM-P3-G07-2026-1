import { test, expect } from '@playwright/test';

test('measure left column width on admin certificates form', async ({
  page,
}) => {
  const apiBaseUrl = 'http://localhost:8888';

  await page.addInitScript(
    ({ baseUrl }) => {
      const originalFetch = window.fetch.bind(window);

      function jsonResponse(data: unknown, status = 200) {
        return new Response(JSON.stringify(data), {
          status,
          headers: { 'Content-Type': 'application/json' },
        });
      }

      window.fetch = async (input, init) => {
        const url = typeof input === 'string' ? input : input.url;
        const pathname = new URL(url, baseUrl).pathname;

        if (pathname === '/auth/me') {
          return jsonResponse({
            user: {
              id: 'admin-1',
              name: 'Admin',
              email: 'admin@example.com',
              role: 'ADMIN',
            },
          });
        }

        if (pathname === '/auth/refresh') {
          return jsonResponse({ message: 'ok' });
        }

        if (pathname.startsWith('/events')) {
          return jsonResponse([
            {
              id: 'event-1',
              title: 'Palestra sobre Meio Ambiente',
              location: 'Auditório Principal',
              type: 'Palestra',
              startDate: '2026-06-01T00:00:00.000Z',
              endDate: '2026-06-01T00:00:00.000Z',
              status: 'ATIVA',
            },
          ]);
        }

        if (pathname.startsWith('/users')) {
          return jsonResponse([]);
        }

        if (pathname.startsWith('/speakers')) {
          return jsonResponse([]);
        }

        if (pathname.startsWith('/certificates')) {
          return jsonResponse([]);
        }

        return originalFetch(input, init);
      };
    },
    { baseUrl: apiBaseUrl },
  );

  await page.goto('/dashboard/admin/certificates');
  await expect(page.locator('main#main-content')).toBeVisible({
    timeout: 15000,
  });

  const grid = page.locator('main#main-content > div').first();
  await expect(grid).toBeVisible({ timeout: 15000 });

  const leftCard = grid.locator(':scope > div').first();
  await expect(leftCard).toBeVisible();

  const box = await leftCard.boundingBox();
  if (!box) throw new Error('Left card bounding box not found');

  expect(Math.round(box.width)).toBeGreaterThan(0);
});

import { test, expect } from '@playwright/test';

test('capture homepage and ai wizard', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'latest_preview.png', fullPage: true });

  await page.goto('/sell');
  await page.screenshot({ path: 'ai_wizard_preview.png', fullPage: true });
});

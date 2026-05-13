import { test, expect } from '@playwright/test';

test('capture screenshots for user', async ({ page }) => {
  await page.goto('http://0.0.0.0:3000');
  await page.screenshot({ path: 'home_preview.png', fullPage: true });

  await page.goto('http://0.0.0.0:3000/sell');
  await page.screenshot({ path: 'sell_preview.png', fullPage: true });
});

// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('BannerSlim dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/BannerSlim-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('BannerSlim-dark.png');
});

// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('BannerSlim visual regression check', async ({ page }) => {
  await page.goto('/visual-test/BannerSlim');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('BannerSlim.png');
});

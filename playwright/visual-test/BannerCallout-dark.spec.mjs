// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('BannerCallout dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/BannerCallout-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('BannerCallout-dark.png');
});

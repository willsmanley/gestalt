// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Avatar visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Avatar');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Avatar.png');
});

// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('IconButtonFloating mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/IconButtonFloating');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('IconButtonFloating.png');
});

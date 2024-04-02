// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Checkbox visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Checkbox');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Checkbox.png');
});

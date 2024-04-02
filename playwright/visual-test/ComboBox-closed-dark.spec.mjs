// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('ComboBox visual regression check', async ({ page }) => {
  await page.goto('/visual-test/ComboBox-closed-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('ComboBox-closed-dark.png');
});

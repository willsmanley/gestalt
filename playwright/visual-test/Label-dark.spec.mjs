// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Label dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Label-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Label-dark.png');
});

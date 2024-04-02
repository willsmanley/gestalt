// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Checkbox dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Checkbox-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Checkbox-dark.png');
});

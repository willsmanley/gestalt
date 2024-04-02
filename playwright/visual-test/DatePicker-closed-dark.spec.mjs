// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('DatePicker visual regression check', async ({ page }) => {
  await page.goto('/visual-test/DatePicker-closed-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('DatePicker-closed-dark.png');
});

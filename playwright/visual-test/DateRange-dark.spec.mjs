// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('DateRange dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/DateRange-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('DateRange-dark.png');
});

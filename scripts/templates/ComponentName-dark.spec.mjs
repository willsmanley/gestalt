// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('ComponentName dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/ComponentName-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('ComponentName-dark.png');
});

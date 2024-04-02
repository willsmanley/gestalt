// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('SelectList dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/SelectList-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('SelectList-dark.png');
});

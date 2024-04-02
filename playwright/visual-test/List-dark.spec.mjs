// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('List dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/List-dark');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('List-dark.png');
});

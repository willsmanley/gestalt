// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('SearchField visual regression check', async ({ page }) => {
  await page.goto('/visual-test/SearchField');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('SearchField.png');
});

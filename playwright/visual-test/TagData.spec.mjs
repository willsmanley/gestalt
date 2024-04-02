// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('TagData light mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/TagData');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('TagData.png');
});

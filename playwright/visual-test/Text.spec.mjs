// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Text visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Text');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Text.png');
});

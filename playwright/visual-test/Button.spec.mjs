// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Button visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Button');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Button.png');
});

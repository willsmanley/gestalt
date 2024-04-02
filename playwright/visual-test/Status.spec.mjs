// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Status visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Status');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Status.png');
});

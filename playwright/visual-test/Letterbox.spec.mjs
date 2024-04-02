// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Letterbox mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Letterbox');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Letterbox.png');
});

// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('Collage dark mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/Collage-dark', {
    // Wait until all network requests have finished
    waitUntil: 'networkidle',
  });
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Collage-dark.png');
});

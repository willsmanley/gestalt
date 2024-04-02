// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('TableOfContents light mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/TableOfContents-light');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('TableOfContents-light.png');
});

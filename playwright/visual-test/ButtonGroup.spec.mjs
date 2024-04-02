// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('ButtonGroup visual regression check', async ({ page }) => {
  await page.goto('/visual-test/ButtonGroup');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('ButtonGroup.png');
});

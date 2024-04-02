// @flow strict
import { expect, test } from '@chromatic-com/playwright';

test('SegmentedControl mode visual regression check', async ({ page }) => {
  await page.goto('/visual-test/SegmentedControl');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('SegmentedControl.png');
});

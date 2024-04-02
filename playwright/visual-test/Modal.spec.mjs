// @flow strict
import { expect, test } from '@chromatic-com/playwright';

const BREAKPOINTS = { xs: 360 };

test('Modal mode visual regression check', async ({ page }) => {
  await page.setViewportSize({
    width: BREAKPOINTS.xs,
    height: BREAKPOINTS.xs,
  });
  await page.goto('/visual-test/Modal');
  const locator = page.locator('[data-test-id="visual-test"]');
  await expect(locator).toHaveScreenshot('Modal.png');
});

// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Popover Accessibility check', async ({ page }) => {
  await page.goto('/web/popover');
  await expectAccessiblePage({
    page,
  });
});

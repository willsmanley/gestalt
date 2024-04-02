// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Tooltip Accessibility check', async ({ page }) => {
  await page.goto('/web/tooltip');
  await expectAccessiblePage({ page });
});

// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Column Accessibility check', async ({ page }) => {
  await page.goto('/web/column');
  await expectAccessiblePage({ page });
});

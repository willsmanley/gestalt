// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Table Accessibility check', async ({ page }) => {
  await page.goto('/web/table');
  await expectAccessiblePage({ page });
});

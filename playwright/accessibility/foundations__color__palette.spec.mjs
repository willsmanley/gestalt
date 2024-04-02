// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Data viz palette check', async ({ page }) => {
  await page.goto('/foundations/color/palette');
  await expectAccessiblePage({ page });
});

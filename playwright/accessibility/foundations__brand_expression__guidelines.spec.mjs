// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Brand expression guidelines Accessibility check', async ({ page }) => {
  await page.goto('/foundations/brand_expression/guidelines');
  await expectAccessiblePage({ page });
});

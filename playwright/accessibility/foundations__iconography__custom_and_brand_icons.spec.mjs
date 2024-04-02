// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Custom brand icons check', async ({ page }) => {
  await page.goto('/foundations/iconography/custom_and_brand_icons');
  await expectAccessiblePage({ page });
});

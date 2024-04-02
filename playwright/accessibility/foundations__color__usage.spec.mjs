// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Color Usage Accessibility check', async ({ page }) => {
  await page.goto('/foundations/color/usage');
  await expectAccessiblePage({ page });
});

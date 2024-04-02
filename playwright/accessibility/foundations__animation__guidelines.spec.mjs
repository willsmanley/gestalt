// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Animation guidelines check', async ({ page }) => {
  await page.goto('/foundations/animation/guidelines');
  await expectAccessiblePage({ page });
});

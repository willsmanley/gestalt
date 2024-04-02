// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Typography guidelines check', async ({ page }) => {
  await page.goto('/foundations/typography');
  await expectAccessiblePage({ page });
});

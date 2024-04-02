// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Content standards Formatting check', async ({ page }) => {
  await page.goto('/foundations/content_standards/formatting');
  await expectAccessiblePage({ page });
});

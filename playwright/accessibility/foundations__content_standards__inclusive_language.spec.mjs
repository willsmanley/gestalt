// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Content standards Language check', async ({ page }) => {
  await page.goto('/foundations/content_standards/Inclusive_Language');
  await expectAccessiblePage({ page });
});

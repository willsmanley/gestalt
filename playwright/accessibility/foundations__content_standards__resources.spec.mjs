// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Content standards Resources check', async ({ page }) => {
  await page.goto('/foundations/content_standards/resources');
  await expectAccessiblePage({ page });
});

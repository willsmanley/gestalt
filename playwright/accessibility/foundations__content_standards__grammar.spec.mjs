// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Content standards Grammar check', async ({ page }) => {
  await page.goto('/foundations/content_standards/grammar');
  await expectAccessiblePage({ page });
});

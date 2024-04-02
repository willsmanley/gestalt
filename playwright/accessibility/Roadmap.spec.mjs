// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Roadmap check', async ({ page }) => {
  await page.goto('/roadmap');
  await expectAccessiblePage({ page });
});

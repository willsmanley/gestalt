// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('About us DateField check', async ({ page }) => {
  await page.goto('/datefield');
  await expectAccessiblePage({ page });
});

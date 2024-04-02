// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Creating icons check', async ({ page }) => {
  await page.goto('/foundations/iconography/creating_icons');
  await expectAccessiblePage({ page });
});

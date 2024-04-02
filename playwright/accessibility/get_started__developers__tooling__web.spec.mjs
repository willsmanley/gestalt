// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Tooling Web check', async ({ page }) => {
  await page.goto('/get_started/developers/tooling/web');
  await expectAccessiblePage({ page });
});

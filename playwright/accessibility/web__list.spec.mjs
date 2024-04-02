// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('About us List check', async ({ page }) => {
  await page.goto('/web/list');
  await expectAccessiblePage({ page });
});

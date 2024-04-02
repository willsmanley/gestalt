// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Overview web component page check', async ({ page }) => {
  await page.goto('/web/overview');
  await expectAccessiblePage({ page });
});

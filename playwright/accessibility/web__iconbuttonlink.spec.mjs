// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Web IconButton Accessibility check', async ({ page }) => {
  await page.goto('/web/iconbuttonlink');
  await expectAccessiblePage({ page });
});

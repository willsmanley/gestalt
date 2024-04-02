// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('SearchField Accessibility check', async ({ page }) => {
  await page.goto('/web/searchfield');
  await expectAccessiblePage({ page });
});

// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('TagData Accessibility check', async ({ page }) => {
  await page.goto('/web/tagdata');
  await expectAccessiblePage({ page });
});

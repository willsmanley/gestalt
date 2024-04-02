// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Messaging overview accessibility check', async ({ page }) => {
  await page.goto(
    '/foundations/international_design/rtl_guidelines/iconography'
  );
  await expectAccessiblePage({ page });
});

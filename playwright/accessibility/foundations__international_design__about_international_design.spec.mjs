// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Messaging overview accessibility check', async ({ page }) => {
  await page.goto(
    '/foundations/international_design/about_international_design'
  );
  await expectAccessiblePage({ page });
});

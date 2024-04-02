// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('NumberField Accessibility check', async ({ page }) => {
  await page.goto('/web/numberfield');
  await expectAccessiblePage({ page });
});

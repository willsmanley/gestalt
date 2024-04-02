// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('SelectList Accessibility check', async ({ page }) => {
  await page.goto('/web/selectlist');
  await expectAccessiblePage({ page });
});

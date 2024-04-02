// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('TextField Accessibility check', async ({ page }) => {
  await page.goto('/web/textfield');
  await expectAccessiblePage({ page });
});

// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Toast Accessibility check', async ({ page }) => {
  await page.goto('/web/toast');
  await expectAccessiblePage({ page });
});

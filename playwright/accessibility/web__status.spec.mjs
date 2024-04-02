// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Status Accessibility check', async ({ page }) => {
  await page.goto('/web/status');
  await expectAccessiblePage({ page });
});

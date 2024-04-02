// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Web component status check', async ({ page }) => {
  await page.goto('/web/component_status');
  await expectAccessiblePage({ page });
});

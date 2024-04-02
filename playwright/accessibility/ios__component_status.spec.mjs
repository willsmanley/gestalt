// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS component status check', async ({ page }) => {
  await page.goto('/ios/component_status');
  await expectAccessiblePage({ page });
});

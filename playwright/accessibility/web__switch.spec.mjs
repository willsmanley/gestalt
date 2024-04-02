// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Web Switch Accessibility check', async ({ page }) => {
  await page.goto('/web/switch');
  await expectAccessiblePage({ page });
});

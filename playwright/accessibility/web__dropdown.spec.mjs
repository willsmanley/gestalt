// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Dropdown Accessibility check', async ({ page }) => {
  await page.goto('/web/dropdown');
  await expectAccessiblePage({ page });
});

// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Modal Accessibility check', async ({ page }) => {
  await page.goto('/web/modal');
  await expectAccessiblePage({ page });
});

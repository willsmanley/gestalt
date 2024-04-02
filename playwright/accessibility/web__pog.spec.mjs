// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Pog Accessibility check', async ({ page }) => {
  await page.goto('/web/pog');
  await expectAccessiblePage({ page });
});

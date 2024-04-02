// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Sticky Accessibility check', async ({ page }) => {
  await page.goto('/web/sticky');
  await expectAccessiblePage({ page });
});

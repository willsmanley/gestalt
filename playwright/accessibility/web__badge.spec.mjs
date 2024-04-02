// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Badge Accessibility check', async ({ page }) => {
  await page.goto('/web/badge');
  await expectAccessiblePage({ page });
});

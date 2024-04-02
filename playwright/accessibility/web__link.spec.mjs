// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Link Accessibility check', async ({ page }) => {
  await page.goto('/web/link');
  await expectAccessiblePage({ page });
});

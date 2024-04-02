// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Avatar Accessibility check', async ({ page }) => {
  await page.goto('/web/avatar');
  await expectAccessiblePage({ page });
});

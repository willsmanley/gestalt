// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Overview Team Support Accessibility check', async ({ page }) => {
  await page.goto('/team_support/overview');
  await expectAccessiblePage({ page });
});

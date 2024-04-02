// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Contributions Accessibility check', async ({ page }) => {
  await page.goto('/team_support/contributions');
  await expectAccessiblePage({ page });
});

// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Component request Accessibility check', async ({ page }) => {
  await page.goto('/team_support/component_request');
  await expectAccessiblePage({ page });
});

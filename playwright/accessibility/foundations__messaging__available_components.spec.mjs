// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Available Components Accessibility check', async ({ page }) => {
  await page.goto('/foundations/messaging/available_components');
  await expectAccessiblePage({ page });
});

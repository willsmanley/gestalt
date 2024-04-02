// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('How to Hack Around Gestalt Accessibility check', async ({ page }) => {
  await page.goto('/get_started/developers/hacking_gestalt');
  await expectAccessiblePage({ page });
});

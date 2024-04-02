// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('HelpButton Accessibility check', async ({ page }) => {
  await page.goto('/web/helpbutton');
  await expectAccessiblePage({ page });
});

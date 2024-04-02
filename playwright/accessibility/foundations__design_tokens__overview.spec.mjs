// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Design Tokens Accessibility check', async ({ page }) => {
  await page.goto('/foundations/design_tokens/overview');
  await expectAccessiblePage({ page });
});

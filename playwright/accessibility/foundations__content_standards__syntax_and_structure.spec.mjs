// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Content standards Syntax Structure check', async ({ page }) => {
  await page.goto('/foundations/content_standards/syntax_and_structure');
  await expectAccessiblePage({ page });
});

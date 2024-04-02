// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('2023 Q1 Newsletter Accessibility check', async ({ page }) => {
  await page.goto('/blog/2023_q1_newsletter');
  await expectAccessiblePage({ page });
});

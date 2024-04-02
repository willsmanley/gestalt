// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('useReducedMotion Accessibility check', async ({ page }) => {
  await page.goto('/web/utilities/usereducedmotion');
  await expectAccessiblePage({ page });
});

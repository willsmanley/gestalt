// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('ScrollBoundaryContainer Accessibility check', async ({ page }) => {
  await page.goto('/web/utilities/scrollboundarycontainer');
  await expectAccessiblePage({ page });
});

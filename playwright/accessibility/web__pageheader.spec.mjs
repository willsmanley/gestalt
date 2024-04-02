// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('PageHeader Accessibility check', async ({ page }) => {
  await page.goto('/web/pageheader');
  await expectAccessiblePage({
    page,
    rules: {
      'heading-order': { enabled: false },
    },
  });
});

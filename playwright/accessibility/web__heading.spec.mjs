// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Heading Accessibility check', async ({ page }) => {
  await page.goto('/web/heading');
  await expectAccessiblePage({
    page,
    rules: {
      'heading-order': { enabled: false },
    },
  });
});

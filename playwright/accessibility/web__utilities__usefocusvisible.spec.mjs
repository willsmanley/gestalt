// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('useFocusVisible Accessibility check', async ({ page }) => {
  await page.goto('/web/utilities/usefocusvisible');
  await expectAccessiblePage({ page });
});

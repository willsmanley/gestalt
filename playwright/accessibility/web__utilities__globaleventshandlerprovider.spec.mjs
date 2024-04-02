// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('GlobalEventsHandlerProvider Accessibility check', async ({ page }) => {
  await page.goto('/web/utilities/globaleventshandlerprovider');
  await expectAccessiblePage({ page });
});

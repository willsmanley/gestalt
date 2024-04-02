// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('SegmentedControl Accessibility check', async ({ page }) => {
  await page.goto('/web/segmentedcontrol');
  await expectAccessiblePage({ page });
});

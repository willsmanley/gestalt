// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('DefaultLabelProvider Accessibility check', async ({ page }) => {
  await page.goto('/web/utilities/defaultlabelprovider');
  await expectAccessiblePage({ page });
});

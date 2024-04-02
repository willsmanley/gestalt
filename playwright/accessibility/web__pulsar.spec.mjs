// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('Pulsar Accessibility check', async ({ page }) => {
  await page.goto('/web/pulsar');
  await expectAccessiblePage({ page });
});

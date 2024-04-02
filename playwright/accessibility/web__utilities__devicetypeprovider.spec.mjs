// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('DeviceTypeProvider Accessibility check', async ({ page }) => {
  await page.goto('/web/utilities/devicetypeprovider');
  await expectAccessiblePage({ page });
});

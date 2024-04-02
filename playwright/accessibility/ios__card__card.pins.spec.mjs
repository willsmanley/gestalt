// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS Card.Pins Accessibility check', async ({ page }) => {
  await page.goto('/ios/card/card.pins');
  await expectAccessiblePage({ page });
});

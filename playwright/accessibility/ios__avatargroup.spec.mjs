// @flow strict
import { test } from '@chromatic-com/playwright';
import expectAccessiblePage from './expectAccessiblePage.mjs';

test('iOS AvatarGroup Accessibility check', async ({ page }) => {
  await page.goto('/ios/avatargroup');
  await expectAccessiblePage({ page });
});

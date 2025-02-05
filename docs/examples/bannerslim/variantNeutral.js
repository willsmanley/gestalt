// @flow strict
import { type Node as ReactNode } from 'react';
import { BannerSlim, Box } from 'gestalt';

export default function Example(): ReactNode {
  return (
    <Box padding={8} height="100%" display="flex" alignItems="center" justifyContent="center">
      <BannerSlim message="Your total audience includes all users who have seen or engaged with any of your Pins in the last 30 days." />
    </Box>
  );
}

// @flow strict
import { type Node as ReactNode } from 'react';
import { Flex, TileData } from 'gestalt';

export default function Example(): ReactNode {
  return (
    <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
      <TileData
        tooltip={{ text: 'Weekly Active Users' }}
        title="WAU"
        value="1.25M"
        disabled
        trend={{ value: 20, accessibilityLabel: 'Trending up' }}
      />
    </Flex>
  );
}

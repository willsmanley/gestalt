// @flow strict
import { Fragment, type Node, useState, useCallback } from 'react';
import { Box, Button, CompositeZIndex, FixedZIndex, Flex, IconButton, Layer, Sheet } from 'gestalt';

export default function AnimationExample(): Node {
  const [shouldShow, setShouldShow] = useState(false);
  const HEADER_ZINDEX = new FixedZIndex(10);
  const sheetZIndex = new CompositeZIndex([HEADER_ZINDEX]);

  const subheading = useCallback(
    ({ onDismissStart }) => (
      <Box marginBottom={4} marginStart={8} marginEnd={8}>
        <Button color="blue" onClick={onDismissStart} text="Close on Sub-heading" />
      </Box>
    ),
    [],
  );

  const footer = useCallback(
    ({ onDismissStart }) => (
      <Flex justifyContent="end">
        <Button onClick={onDismissStart} text="Close on Footer" />
      </Flex>
    ),
    [],
  );

  return (
    <Fragment>
      <Box padding={8}>
        <Button text="Open example sheet" onClick={() => setShouldShow(true)} />
      </Box>
      {shouldShow && (
        <Layer zIndex={sheetZIndex}>
          <Sheet
            accessibilityDismissButtonLabel="Close"
            accessibilitySheetLabel="Animated sheet"
            footer={footer}
            heading="Animated Sheet"
            onDismiss={() => setShouldShow(false)}
            size="md"
            subHeading={subheading}
          >
            {({ onDismissStart }) => (
              <Flex justifyContent="center" alignItems="center" height="100%">
                <IconButton
                  accessibilityLabel="Done icon left"
                  icon="directional-arrow-right"
                  iconColor="red"
                  onClick={onDismissStart}
                  size="lg"
                />
                <Button color="red" onClick={onDismissStart} size="lg" text="Done on Children" />
                <IconButton
                  accessibilityLabel="Done icon right"
                  icon="directional-arrow-left"
                  iconColor="red"
                  onClick={onDismissStart}
                  size="lg"
                />
              </Flex>
            )}
          </Sheet>
        </Layer>
      )}
    </Fragment>
  );
}

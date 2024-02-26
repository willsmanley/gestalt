// @flow strict
import { type AbstractComponent, forwardRef, type Node as ReactNode, useState } from 'react';
import classnames from 'classnames';
import Badge from './Badge';
import Box from './Box';
import Flex from './Flex';
import focusStyles from './Focus.css';
import Label from './Label';
import styles from './RadioButton.css';
import controlStyles from './RadioButtonCheckbox.css';
import { useRadioGroupContext } from './RadioGroup/Context';
import FormHelperText from './shared/FormHelperText';
import Text from './Text';
import useFocusVisible from './useFocusVisible';

type BadgeType = {
  text: string,
  type?:
    | 'info'
    | 'error'
    | 'warning'
    | 'success'
    | 'neutral'
    | 'recommendation'
    | 'darkWash'
    | 'lightWash',
};

type Props = {
  /**
   * An optional [Badge](https://gestalt.pinterest.systems/web/badge) component can be supplied to add a badge to each radio button. See the [badges example](https://gestalt.pinterest.systems/web/radiogroup#With-Badge) for more details.
   */
  badge?: BadgeType,
  /**
   * Indicates if the input is checked. See the [state example](https://gestalt.pinterest.systems/web/radiogroup#States) for more details.
   */
  checked?: boolean,
  /**
   * Indicates if the input is disabled. See the [state example](https://gestalt.pinterest.systems/web/radiogroup#States) for more details.
   */
  disabled?: boolean,
  /**
   * A unique identifier for the input.
   */
  id: string,
  /**
   * An optional [Image](https://gestalt.pinterest.systems/web/image) component can be supplied to add an image to each radio button. Spacing is already accounted for — simply specify the width and height. See the [images example](https://gestalt.pinterest.systems/web/radiogroup#With-Image) for more details.
   */
  image?: ReactNode,
  /**
   * The displayed label for the input.
   */
  label?: string,
  /**
   * The name given for all radio buttons in a single group.
   */
  name?: string,
  /**
   * Callback triggered when the user interacts with the input.
   */
  onChange: ({
    event: SyntheticInputEvent<HTMLInputElement>,
    checked: boolean,
  }) => void,
  /**
   * Ref forwarded to the underlying input element. See [ref example](https://gestalt.pinterest.systems/web/radiogroup#Using-ref) for more details.
   */
  ref?: HTMLInputElement, // eslint-disable-line react/no-unused-prop-types
  /**
   * sm: 16px, md: 24px
   */
  size?: 'sm' | 'md',
  /**
   * Optional description for the input, used to provide more detail about an option. See the [helperText example](https://gestalt.pinterest.systems/web/radiogroup#With-helperText) for more details.
   */
  helperText?: string,
  /**
   * The value of the input.
   */
  value: string,
};

/**
 *  Use [RadioGroup.RadioButtons](https://gestalt.pinterest.systems/web/radiogroup#RadioGroup.RadioButton) to present an option for selection to the user within a RadioGroup. They should not be used outside of RadioGroup or when the user can select more than one option from a list.
 *
 * ![RadioGroup light mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/RadioGroup.spec.mjs-snapshots/RadioGroup-chromium-darwin.png)
 * ![RadioGroup dark mode](https://raw.githubusercontent.com/pinterest/gestalt/master/playwright/visual-test/RadioGroup-dark.spec.mjs-snapshots/RadioGroup-dark-chromium-darwin.png)
 *
 */
const RadioGroupButtonWithForwardRef: AbstractComponent<Props, HTMLInputElement> = forwardRef<
  Props,
  HTMLInputElement,
>(function RadioButton(
  {
    checked = false,
    disabled = false,
    id,
    image,
    label,
    name,
    onChange,
    helperText,
    value,
    badge,
    size = 'md',
  }: Props,
  ref,
): ReactNode {
  const [focused, setFocused] = useState(false);
  const [hovered, setHover] = useState(false);

  const handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void = (event) =>
    onChange({ checked: event.target.checked, event });

  const handleBlur: () => void = () => setFocused(false);

  const handleFocus: () => void = () => setFocused(true);

  const handleHover: (isHovered: boolean) => void = (isHovered: boolean) => setHover(isHovered);

  let borderStyle = styles.Border;
  if (disabled && checked) {
    borderStyle = styles.BorderDisabledChecked;
  } else if (!disabled && checked) {
    borderStyle = styles.BorderSelected;
  } else if (!disabled && hovered) {
    borderStyle = styles.BorderHovered;
  }

  let borderWidth = styles.BorderUnchecked;
  if (disabled && !checked) {
    borderWidth = styles.BorderDisabled;
  } else if (checked && size === 'sm') {
    borderWidth = styles.BorderCheckedSm;
  } else if (checked && size === 'md') {
    borderWidth = styles.BorderCheckedMd;
  }

  const styleSize = size === 'sm' ? controlStyles.sizeSm : controlStyles.sizeMd;

  const bgStyle = disabled && !checked ? styles.BgDisabled : styles.BgEnabled;

  const { isFocusVisible } = useFocusVisible();

  const { parentName } = useRadioGroupContext();
  if (parentName !== 'RadioGroup') {
    throw new Error(
      `RadioGroup.RadioButton must be used within a [RadioGroup](https://gestalt.pinterest.systems/web/radiogroup).`,
    );
  }

  return (
    <Box alignItems="start" display="flex" justifyContent="start" marginStart={-1} marginEnd={-1}>
      <Box paddingX={1}>
        <div
          className={classnames(bgStyle, borderStyle, borderWidth, styleSize, styles.RadioButton, {
            [focusStyles.accessibilityOutlineFocus]: focused && isFocusVisible,
          })}
        >
          <input
            // checking for "focused" is not required by screenreaders but it prevents a11y integration tests to complain about missing label, as aria-describedby seems to shadow label in tests though it's a W3 accepeted pattern https://www.w3.org/TR/WCAG20-TECHS/ARIA1.html
            aria-describedby={helperText && focused ? `${id}-helperText` : undefined}
            checked={checked}
            className={classnames(controlStyles.input, styleSize, {
              [styles.InputEnabled]: !disabled,
            })}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={handleBlur}
            onChange={handleChange}
            onFocus={handleFocus}
            onMouseEnter={() => handleHover(true)}
            onMouseLeave={() => handleHover(false)}
            ref={ref}
            type="radio"
            value={value}
          />
        </div>
      </Box>
      {Boolean(image) && <Box paddingX={1}>{image}</Box>}
      <Flex direction="column">
        <Flex direction="row">
          {label && (
            <Label htmlFor={id}>
              {/* marginTop: '-1px'/'2px' is needed to  visually align the label text & radiobutton input */}
              <Box
                paddingX={1}
                dangerouslySetInlineStyle={{
                  __style: { marginTop: size === 'md' ? '2px' : '-1px' },
                }}
              >
                <Text color={disabled ? 'subtle' : undefined} size={size === 'sm' ? '200' : '300'}>
                  {label}
                </Text>
              </Box>
            </Label>
          )}
          {badge && (
            <Flex.Item minWidth={0} alignSelf="end">
              <Box dangerouslySetInlineStyle={{ __style: { top: '1px' } }} position="relative">
                <Badge text={badge.text} type={badge.type || 'info'} />
              </Box>
            </Flex.Item>
          )}
        </Flex>
        {label && helperText ? (
          <Box paddingX={1}>
            <FormHelperText id={`${id}-helperText`} text={helperText} />
          </Box>
        ) : null}
      </Flex>
    </Box>
  );
});

RadioGroupButtonWithForwardRef.displayName = 'RadioGroup.RadioButton';

export default RadioGroupButtonWithForwardRef;

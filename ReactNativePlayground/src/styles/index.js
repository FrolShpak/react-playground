import { StyleSheet } from 'react-native';
import * as Colors from './colors';
import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Mixins from './mixins';

export { Typography, Spacing, Colors, Mixins };
export const baseStyles = StyleSheet.create({
  baseButton: {
    ...Typography.FONT_BOLD,
    ...Mixins.margin(10, 10, 10, 10),
    ...Mixins.padding(10, 10, 10, 10),
  },
  screen: {
    ...Typography.FONT_REGULAR,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textInput: {
    ...Mixins.margin(10, 10, 10, 10),
    ...Mixins.padding(10, 10, 10, 10),
    width: 200,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
});

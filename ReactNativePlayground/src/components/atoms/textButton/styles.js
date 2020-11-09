import { StyleSheet } from 'react-native';
import { baseStyles, Typography } from '../../../styles';
import * as Colors from '../../../styles/colors';

export const textButtonStyles = StyleSheet.create({
  textButtonView: {
    ...baseStyles.baseButton,
  },
  textButtonText: {
    ...Typography.FONT_BOLD,
    ...Typography.FONT_SIZE_12,
    color: Colors.PRIMARY,
  },
});

import { StyleSheet } from 'react-native';
import { baseStyles, Typography } from '../../../styles';
import * as Colors from '../../../styles/colors';

export const ghostButtonStyles = StyleSheet.create({
  ghostButtonView: {
    ...baseStyles.baseButton,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    borderRadius: 5,
  },
  ghostButtonText: {
    ...Typography.FONT_BOLD,
    color: Colors.PRIMARY,
  },
});

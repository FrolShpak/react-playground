import { StyleSheet } from 'react-native';
import { baseStyles, Typography } from '../../../styles';

export const ghostButtonStyles = StyleSheet.create({
  ghostButtonView: {
    ...baseStyles.baseButton,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  ghostButtonText: {
    ...Typography.FONT_BOLD,
  },
});

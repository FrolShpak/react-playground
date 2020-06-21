import { StyleSheet } from 'react-native'
import * as Colors from './colors';
import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Mixins from './mixins';

export { Typography, Spacing, Colors, Mixins };

export const baseStyles = StyleSheet.create({
    button: {
        ...Typography.FONT_REGULAR,
        color: "red",
        backgroundColor: "red"
    },
    screen: {
        ...Typography.FONT_REGULAR    
    },
    textInput:{
        ...Mixins.margin(10, 10, 10, 10)
    }
});
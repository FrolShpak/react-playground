import { StyleSheet } from 'react-native'
import * as Colors from './colors';
import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Mixins from './mixins';

export { Typography, Spacing, Colors, Mixins };

export const baseStyles = StyleSheet.create({
    textInput:{
        ...Mixins.margin(10, 10, 10, 10)
    }
});
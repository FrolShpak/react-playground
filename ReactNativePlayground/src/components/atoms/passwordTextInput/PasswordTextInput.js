import React from 'react';
import { baseStyles } from '../../../styles';
import { View, TextInput } from 'react-native';

const PasswordTextInput = (props) => {
    //const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const handleValidation = (value) => {
    //     this.isValid = emailCheck.test(value);
    // }
    const borderColor = () => {
        //const color = this.isDirty ? this.isValid ? "#4efc03" : "#fc0303" : "#000000";
        return {
            ...baseStyles.textInput,
            //borderColor: color
        }
    }
    // const onChange = (value) => {
    //     const { onChangeText, onValidation } = props;
    //     this.isDirty = true;
    //     const isValid = handleValidation(value);
    //     onValidation && onValidation(isValid);
    //     onChangeText && onChangeText(value);
    // }
    return(
        <View>
            <TextInput
                {...props}
                //onChangeText={value => onChange(value)}
                placeholder="Password"
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry={true}
                style={borderColor()}
            />
        </View>
    )
}

export default PasswordTextInput;
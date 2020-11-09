import React from 'react';
import { baseStyles } from '../../../styles';
import { View, TextInput } from 'react-native';

let isValid = false;
let isDirty = false;
const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const EmailTextInput = props => {
  const handleValidation = value => {
    return emailCheck.test(value);
  };
  const borderColor = () => {
    const color = isDirty ? (isValid ? '#4efc03' : '#fc0303') : '#000000';
    return {
      ...baseStyles.textInput,
      borderColor: color,
    };
  };
  const onChange = value => {
    const { onChangeText, onValidation } = props;
    isDirty = true;
    isValid = handleValidation(value);
    onValidation && onValidation(isValid);
    onChangeText && onChangeText(value);
  };
  return (
    <View>
      <TextInput
        {...props}
        onChangeText={value => onChange(value)}
        placeholder="Email"
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress"
        style={borderColor()}
      />
    </View>
  );
};

export default EmailTextInput;

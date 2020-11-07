import React from 'react';
import { baseStyles } from '../../../styles';
import { View, TextInput } from 'react-native';

let isValid = false;
let isDirty = false;
const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const PasswordTextInput = props => {
  const handleValidation = value => {
    return passwordCheck.test(value);
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
        placeholder="Password"
        autoCapitalize="none"
        autoCompleteType="password"
        autoCorrect={false}
        textContentType="password"
        secureTextEntry={true}
        style={borderColor()}
      />
    </View>
  );
};

export default PasswordTextInput;

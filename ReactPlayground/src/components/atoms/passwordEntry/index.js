import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

export default class PasswordEntry extends Component {
  render() {
    const styleForInput = {
      ...styles.passwordEntry,
      ...this.props.style
    };
    return (
      <TextInput
        style={styleForInput}
        autoCompleteType = "password"
        secureTextEntry = {true}
        autoCorrect = {false}
        placeholder = "Password"
      />
    );
  }
}
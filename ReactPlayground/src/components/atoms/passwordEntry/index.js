import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class PasswordEntry extends Component {
  render() {
    return (
      <TextInput
          placeholder = "Password"
      />
    );
  }
}
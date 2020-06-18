import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class EmailEntry extends Component {
  render () {
    return (
      <TextInput
        placeholder = "Email"
      />
    );
  }
}
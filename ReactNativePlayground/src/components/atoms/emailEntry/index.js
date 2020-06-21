import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

export default class EmailEntry extends Component {
  render () {
    const styleForInput = {
      ...styles.emailEntry,
      ...this.props.style
    };
    return (
      <TextInput
        style = {styleForInput}
        autoCompleteType = "email"
        autoCorrect = {false}
        keyboardType = "email-address"
        placeholder = "Email"
      />
    );
  }
}
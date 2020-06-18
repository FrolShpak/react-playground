import React, { Component } from 'react';
import { View } from 'react-native';
import EmailEntry from '_atoms/emailEntry';
import PasswordEntry from '_atoms/passwordEntry';
import BasicTitle from '_atoms/basicTitle';
import BasicButton from '_atoms/basicButton';

export default class CredentialsInput extends Component {
  render(){
    return (
      <View>
        <EmailEntry/>
        <PasswordEntry/>
        <BasicButton
            title = "Sign in"
        />
      </View>
  );
  }
}
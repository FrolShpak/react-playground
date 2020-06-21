import React, { Component } from 'react';
import { Text } from 'react-native';
import { useLinkProps } from '@react-navigation/native';

export default class BasicTitle extends Component {
  render(){
    return (
      <Text>{props.titleText}</Text>
    );
  }
}
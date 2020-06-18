import React, { Component } from 'react';
import { Text } from 'react-native';
import { useLinkProps } from '@react-navigation/native';

export default function BasicTitle(props) {
  return (
    <Text>{props.titleText}</Text>
  );
}
import React, { Component } from 'react';
import { Button } from 'react-native';

export default function BasicButton(props) {
  return (
    <Button
        title={props.title}
    />
  );
}
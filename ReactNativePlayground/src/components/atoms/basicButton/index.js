import React, { Component } from 'react';
import { styles } from './styles';
import { Button } from 'react-native';

export default class BasicButton extends Component {
  render() {
    return (
      <Button
          style = {styles.button}
          title = {this.props.title}
      />
    );
  }
}
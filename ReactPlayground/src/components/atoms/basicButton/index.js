import React, { Component } from 'react';
import { Button } from 'react-native';

export default class BasicButton extends Component {
  render() {
    return (
      <Button
          title={this.props.title}
      />
    );
  }
}
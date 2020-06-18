import * as React from 'react'
import { Component } from 'react'
import styles from './style'
import {View, Text} from 'react-native'
import SignInTemplate from '_templates/signInTemplate'

export default class SingInScreen extends Component {
  render() {
    return (
      <SignInTemplate/>
    );
    }
  }
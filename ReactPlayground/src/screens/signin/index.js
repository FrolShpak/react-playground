import * as React from 'react'
import styles from './style'
import {View, Text} from 'react-native'
import CredentialsInput from '_molecules/credentialsInput'

export default function SingInScreen() {
    return (
      <View>
          <Text>SignIn</Text>
          <CredentialsInput/>
      </View>
    );
  }
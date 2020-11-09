import React, { useState } from 'react';
import { connect } from 'react-redux';
import { baseStyles, Mixins, Typography } from '../../../styles';
import { View, Button } from 'react-native';
import { signIn } from '../../../redux/actions/authActions';
import EmailTextInput from '../../../components/atoms/emailTextInput';
import PasswordTextInput from '../../../components/atoms/passwordTextInput';
import GhostButton from '../../../components/atoms/ghostButton';
import TextButton from '../../../components/atoms/textButton';
import * as Colors from '../../../styles/colors';

const SignInScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const signInAction = () => {
    props.signIn({
      credentials: 'test',
    });
  };
  return (
    <View
      style={{
        ...baseStyles.screen,
        justifyContent: 'center',
      }}>
      <EmailTextInput
        onChangeText={email => setEmail(email)}
        defaultValue={email}
      />
      <PasswordTextInput
        onChangeText={password => setPassowrd(password)}
        defaultValue={password}
      />
      <GhostButton title="Sign In" onPress={signInAction} />
      <TextButton
        title="Sign Up"
        textStyle={{
          fontSize: Typography.FONT_SIZE_12,
          color: Colors.SECONDARY,
        }}
        viewStyle={{
          ...Mixins.padding(5),
          ...Mixins.margin(5),
        }}
        onPress={signInAction}
      />
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: cr => dispatch(signIn(cr)),
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(SignInScreen);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { baseStyles } from '../../../styles';
import { View, Button } from 'react-native';
import { signIn } from '../../../redux/actions/authActions';
import EmailTextInput from '../../../components/atoms/emailTextInput/EmailTextInput';
import PasswordTextInput from '../../../components/atoms/passwordTextInput/PasswordTextInput';

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
      <Button title="Sign In" onPress={signInAction} />
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

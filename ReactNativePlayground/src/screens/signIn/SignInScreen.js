import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button } from 'react-native';
import { signIn } from '../../redux/actions/authActions';
import EmailTextInput from '../../components/atoms/emailTextInput/EmailTextInput';



const SignInScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');
  const signInAction = () => {
    props.signIn({
      credentials: 'test',
    })
  };
  return (
    <View>
      <EmailTextInput
        onChangeText={email => setEmail(email)}
        defaultValue={email}
        />
      <TextInput
        onChangeText={password => setPassowrd(password)}
        defaultValue={password}
        placeholder="Password"/>
      <Button title="Sign In" onPress={signInAction} />
    </View>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    signIn: (cr) => dispatch(signIn(cr)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignInScreen);
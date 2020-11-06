import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, TextInput, Button } from 'react-native';
import { signIn } from '../../redux/actions/authActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';



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
      <TextInput
        onChangeText={email => setEmail(email)}
        defaultValue={email}
        placeholder="Email"/>
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
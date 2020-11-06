import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { baseStyles } from '../../styles';
import PropTypes from 'prop-types';

const HomeScreen = (props) => {
  return (
    <View style={baseStyles.screen}>
      <Text>Welcome {props.userInfo.name}</Text>
    </View>
  );
};

HomeScreen.propTypes = {
  userInfo: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.userInfo,
  };
}

export default connect(mapStateToProps)(HomeScreen);

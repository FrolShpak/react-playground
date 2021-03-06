import React from 'react';
import { ghostButtonStyles } from './styles';
import { View, Text } from 'react-native';

const GhostButton = props => {
  const onPressed = () => {
    const { onPress } = props;
    onPress && onPress();
  };
  return (
    <View style={{ ...ghostButtonStyles.ghostButtonView, ...props.viewStyle }}>
      <Text
        style={{ ...ghostButtonStyles.ghostButtonText, ...props.textStyle }}
        onPress={onPressed}>
        {props.title}
      </Text>
    </View>
  );
};

export default GhostButton;

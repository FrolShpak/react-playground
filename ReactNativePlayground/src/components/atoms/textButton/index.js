import React from 'react';
import { textButtonStyles } from './styles';
import { View, Text } from 'react-native';

const TextButton = props => {
  const onPressed = () => {
    const { onPress } = props;
    onPress && onPress();
  };
  return (
    <View style={{ ...textButtonStyles.textButtonView, ...props.viewStyle }}>
      <Text
        style={{ ...textButtonStyles.textButtonText, ...props.textStyle }}
        onPress={onPressed}>
        {props.title}
      </Text>
    </View>
  );
};

export default TextButton;

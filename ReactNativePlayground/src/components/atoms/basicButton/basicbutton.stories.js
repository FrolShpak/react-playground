import React from 'react';
import { action } from '@storybook/addon-actions';
import BasicButton from './index';

export default {
  component: BasicButton,
  title: 'BasicButton',
};

export const text = () => <BasicButton onClick={action('clicked')}>Hello Button</BasicButton>;

export const emoji = () => (
  <BasicButton onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </BasicButton>
);
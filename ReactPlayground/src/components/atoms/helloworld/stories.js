/* @flow */

import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { action } from '@storybook/addon-actions'
import {HelloWorld} from './index';

storiesOf('HelloWorld', module)
  .add('default', () => <HelloWorld name="Hello World"/>)
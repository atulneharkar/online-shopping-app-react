import React from 'react';
import MyFirstComponent from './';
import { storiesOf } from '@storybook/react';

storiesOf('Components', module)
  .add('My First Component', () => {
    return (
      <MyFirstComponent text="MyFirstComponent story" />
    );
  });
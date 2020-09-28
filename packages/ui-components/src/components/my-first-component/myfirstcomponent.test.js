import React from 'react';
import { render } from '@testing-library/react';
import MyFirstComponent from './';

test('ui components test', () => {
  const { getByText } = render(<MyFirstComponent text="testing" />);
  const linkElement = getByText(/testing/i);
  expect(linkElement).toBeInTheDocument();
});

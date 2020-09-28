import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('shopping app graphql test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/shopping app graphql/i);
  expect(linkElement).toBeInTheDocument();
});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('shopping app test', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Shopping app/i);
  expect(linkElement).toBeInTheDocument();
});

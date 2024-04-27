import React from 'react';
import { render, screen } from '@testing-library/react';
import MainPage from './main';

test('renders learn react link', () => {
  render(<MainPage />);
  const linkElement = screen.getByText(/autocomplete/i);
  expect(linkElement).toBeInTheDocument();
});

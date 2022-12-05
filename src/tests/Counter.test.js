// import necessary react testing library helpers 
import React from 'react';

// import react-testing methods
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// import the Counter component
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  //get initial count
  const initialCount = screen.getByTestId('count');

  expect(initialCount).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  //get initial count
  const initialCount = screen.getByTestId('count').textContent;

  //define increment button
  const incrementButton = screen.getByRole('button', {name: '+'});

  //simulate click of + button
  fireEvent.click(incrementButton);

  //assert that when button is clicked count = count + 1
  expect(screen.getByTestId('count')).toHaveTextContent("" + (parseInt(initialCount) + 1));

  //expect(screen.getByRole(button, '+')).not.toBeDisabled()
});

test('clicking - decrements the count', () => {
  //get initial count
  const initialCount = screen.getByTestId('count').textContent;

  //define decrement button
  const decrementButton = screen.getByRole('button', {name: '-'});

  //simulate click of + button
  fireEvent.click(decrementButton);

  //assert that when button is clicked count = count + 1
  expect(screen.getByTestId('count')).toHaveTextContent("" + (parseInt(initialCount) - 1));
});

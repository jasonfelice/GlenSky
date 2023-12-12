import {render, screen} from '@testing-library/react';
import getCurrentDate from './utils/getCurrentDate';
import App from './App';

test('if the date is rendered', () => {
  render(<App />);
  const date = screen.queryByText(getCurrentDate());
  expect(date).toBeVisible();
});

import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import getCurrentDate from './utils/getCurrentDate';
import App from './App';

test('if the date is rendered', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
    );
  const date = screen.queryByText(getCurrentDate(new Date()));
  expect(date).toBeVisible();
});

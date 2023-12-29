import {fireEvent, render, screen} from '@testing-library/react';
import Weather from '../Weather';

describe('Weather', () => {
  test('if the user can change temprature state', () => {
    render(<Weather />);
    const cel = screen.queryByText('C');
  });
});

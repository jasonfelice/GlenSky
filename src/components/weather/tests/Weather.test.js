import {fireEvent, render, screen} from '@testing-library/react';
import Weather from '../Weather';

describe('Weather', () => {
  test('if the temprature chart is displayed by default', () => {
    render(<Weather />);
    const tempChart = screen.queryByLabelText('temp-chart');
    expect(tempChart).toBeVisible();
  });
  test('if the tabs can change to precipitation chart', () => {
    render(<Weather />);
    const preTab = screen.queryByText('Precipitation');
    fireEvent.click(preTab);
    const preChart = screen.queryByLabelText('pre-chart');
    expect(preChart).toBeVisible();
  });
});

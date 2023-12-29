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
  test('if the tabs can change to humidity chart', () => {
    render(<Weather />);
    const humidTab = screen.queryByText('Humidity');
    fireEvent.click(humidTab);
    const humidChart = screen.queryByLabelText('humid-chart');
    expect(humidChart).toBeVisible();
  });
  test('if the tabs can change to wind chart', () => {
    render(<Weather />);
    const windTab = screen.queryByText('Wind');
    fireEvent.click(windTab);
    const windChart = screen.queryByLabelText('wind-chart');
    expect(windChart).toBeVisible();
  });
  test('if the tabs can change back to temprature chart', () => {
    render(<Weather />);
    const tempTab = screen.queryByText('Temperature');
    fireEvent.click(tempTab);
    const tempChart = screen.queryByLabelText('temp-chart');
    expect(tempChart).toBeVisible();
  });
});

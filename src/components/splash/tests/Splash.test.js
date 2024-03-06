import getTimeOfDay from '../../../utils/getTimeOfDay';
import {fireEvent, render, screen} from '@testing-library/react';
import Splash from '../Splash';

describe('Splash', () => {
  test('if the correct vectors are rendering', () => {
    const date = new Date();
    render(<Splash date={date}/>);
    const vector = screen.queryByAltText(getTimeOfDay(date));
    expect(vector).toBeVisible();
  });
  test('if the animated placeholder is rendering', () => {
    const date = new Date();
    render(<Splash date={date}/>);
    const animText = screen.queryByText('Las Vegas, Nevada, USA');
    expect(animText).toBeVisible();
  });
  test('if the input is hidden by default', () => {
    const date = new Date();
    render(<Splash date={date}/>);
    const input = screen.queryByRole('input');
    expect(input).toBeNull();
  });
  test('if the input is visible when user click on the form', () => {
    const date = new Date();
    render(<Splash date={date}/>);
    const animText = screen.queryByText('Las Vegas, Nevada, USA');
    fireEvent.click(animText);
    const input = screen.queryByPlaceholderText('Las Vegas, Nevada, USA');
    expect(input).toBeVisible();
  });
});

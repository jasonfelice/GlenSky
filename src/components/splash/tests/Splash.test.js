import getTimeOfDay from '../../../utils/getTimeOfDay';
import {render, screen} from '@testing-library/react';
import Splash from '../Splash';

describe('Splash', () => {
    const date = new Date()
    render(<Splash date={date}/>);
  test('if the correct vectors are rendering', () => {
    const vector = screen.queryByAltText(getTimeOfDay(date));
    expect(vector).toBeVisible();
  })
  test('if the form is visible', () => {
    const form = screen.queryByRole('form');
    expect(form).toBeVisible();
  })
});

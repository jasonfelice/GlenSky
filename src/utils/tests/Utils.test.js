import Utils from '../Utils';

describe('Utils Test', () => {
  test('if should return a string', () => {
    const result = Utils.getCurrentDate(new Date());
    expect(typeof(result)).toBe('string')
  });
  
  test('if currentDate returns a string', () => {
    const result = Utils.getTimeOfDay(new Date());
    expect(typeof(result)).toBe('string')
  });
  
  test('if it getDay returns correct day', () => {
    const result = Utils.getDay('2024-01-05');
    expect(result).toBe('Fri');
  });
  test('if the correct 12 format is returned. 9am', () => {
    const result = Utils.getHour('2023-12-29 15:00:00');
    expect(result).toBe('3pm')
  });
  test('Get hour edge case 1. 12am', () => {
    const result = Utils.getHour('2023-12-29 00:00:00');
    expect(result).toBe('12am');
  });
  test('Get hour edge case 2. 12pm', () => {
    const result = Utils.getHour('2023-12-29 12:00:00');
    expect(result).toBe('12pm');
  });
});

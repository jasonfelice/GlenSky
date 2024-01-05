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
});

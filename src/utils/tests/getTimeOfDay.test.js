import getCurrentDate from '../getTimeOfDay';

it('should return a string', () => {
  const result = getCurrentDate(new Date());
  expect(typeof(result)).toBe('string')
});

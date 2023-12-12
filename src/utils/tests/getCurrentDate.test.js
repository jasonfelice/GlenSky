import getCurrentDate from '../getCurrentDate';

it('should return a string', () => {
  const result = getCurrentDate();
  expect(typeof(result)).toBe('string')
});

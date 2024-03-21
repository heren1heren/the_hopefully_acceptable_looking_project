import { sum } from '../src/sample'; // wallaby only work with src files when we use import and export key word.

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

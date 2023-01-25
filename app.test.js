import { aLength } from './app';

describe('Given this function', () => {
  test('Then  if the array is [1, 2, 3, 4, 5] the length should be 5', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aLength(aData);
    const expected = 5;
    expect(r).toBe(expected);
  });
});

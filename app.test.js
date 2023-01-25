import { aLength, aUnshift } from './app';
import { aPush } from './app';

describe('Given this function', () => {
  test('Then  if the array is [1, 2, 3, 4, 5] the length should be 5', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aLength(aData);
    const expected = 5;
    expect(r).toBe(expected);
  });

  test('Then  if the array is [1, 2, 3, 4, 5] the push should be 6', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aPush(aData, 'ejemplo');
    const expected = 6;
    expect(r).toBe(expected);
  });

  test('Then  if the array is [1, 2, 3, 4, 5] the unshift should be 6', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aUnshift(aData, 'ejemplo');
    const expected = 6;
    expect(r).toBe(expected);
  });
});

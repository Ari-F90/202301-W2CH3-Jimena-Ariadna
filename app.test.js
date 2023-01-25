import { aLength, aPush, aPop, aShift, aUnshift, aSome, aEvery } from './app';

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
  test('Then  if the array is [1, 2, 3, 4, 23] the pop function should be 23', () => {
    const aData = [1, 2, 3, 4, 5, 23];
    const r = aPop(aData);
    const expected = 23;
    expect(r).toBe(expected);
  });
  test('Then  if the array is [34, 26, 3, 4, 23] the shift function should be 34', () => {
    const aData = [34, 26, 3, 4, 23];
    const r = aShift(aData);
    const expected = 34;
    expect(r).toBe(expected);
  });

  test('Then  if the array is [1, 2, 3, 4, 5] the unshift should be 6', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aUnshift(aData, 'ejemplo');
    const expected = 6;
    expect(r).toBe(expected);
  });

  test('Then  if the array is [1, 2, 3, 4, 5] some(elem => 4) should be true', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aSome(aData, 4);
    const expected = true;
    expect(r).toBe(expected);
  });

  test('Then  if the array is [1, 2, 3, 4, 5] every(elem => 5) should be false', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aEvery(aData, 5);
    const expected = false;
    expect(r).toBe(expected);
  });
});

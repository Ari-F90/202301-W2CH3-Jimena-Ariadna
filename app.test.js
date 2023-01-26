import {
  aLength,
  aPush,
  aPop,
  aShift,
  aUnshift,
  aSome,
  aEvery,
  aFilter,
  aMap,
  aFind,
  aFindIndex,
} from './app';

describe('Given this function', () => {
  describe('When we have an array', () => {
    test('Then  if the array is [1, 2, 3, 4, 5] the length should be 5', () => {
      const aData = [1, 2, 3, 4, 5];
      const r = aLength(aData);
      const expected = 5;
      expect(r).toBe(expected);
    });
  });
});

describe('Given this function', () => {
  describe('When we have an array and a parameter', () => {
    test('Then  if the array is [1, 2, 3, 4, 5] the push should be 6', () => {
      const aData = [1, 2, 3, 4, 5];
      const r = aPush(aData, 'ejemplo');
      const expected = 6;
      expect(r).toBe(expected);
    });
  });
});

describe('Given this function', () => {
  describe('When we have an array', () => {
    test('Then  if the array is [1, 2, 3, 4, 23] the pop function should be 23', () => {
      const aData = [1, 2, 3, 4, 5, 23];
      const r = aPop(aData);
      const expected = 23;
      expect(r).toBe(expected);
    });
  });
});

describe('Given this function', () => {
  describe('When we have an array', () => {
    test('Then  if the array is [34, 26, 3, 4, 23] the shift function should be 34', () => {
      const aData = [34, 26, 3, 4, 23];
      const r = aShift(aData);
      const expected = 34;
      expect(r).toBe(expected);
    });
  });
});

describe('Given this function', () => {
  describe('When we have an array and a parameter', () => {
    test('Then  if the array is [1, 2, 3, 4, 5] the unshift should be 6', () => {
      const aData = [1, 2, 3, 4, 5];
      const r = aUnshift(aData, 'ejemplo');
      const expected = 6;
      expect(r).toBe(expected);
    });
  });
});
describe('Given this function', () => {
  describe('When we have an array and a parameter', () => {
    test('Then  if the array is [1, 2, 3, 4, 5] some(elem => 4) should be true', () => {
      const aData = [1, 2, 3, 4, 5];
      const r = aSome(aData, 4);
      const expected = true;
      expect(r).toBe(expected);
    });
  });
});

describe('Given this function', () => {
  describe('When we have an array and a parameter', () => {
    test('Then  if the array is [1, 2, 3, 4, 5] every(elem => 5) should be false', () => {
      const aData = [1, 2, 3, 4, 5];
      const r = aEvery(aData, 5);
      const expected = false;
      expect(r).toBe(expected);
    });
  });
});

describe('Given this function', () => {
  describe('When we have an array and a parameter', () => {
    test('Then  if the array is [1, 2, 3, 4, 5, 6] find (elem => 6) should be 6', () => {
      const aData = [1, 2, 3, 4, 5, 6];
      const r = aFind(aData, 6);
      const expected = 6;
      expect(r).toBe(expected);
    });
  });
});
describe('Given this function', () => {
  describe('When we have an array and a parameter', () => {
    test('Then  if the array is [1, 2, 3, 4, 5, 6] find index (elem => 6) should be 5', () => {
      const aData = [1, 2, 3, 4, 5, 6];
      const r = aFindIndex(aData, 6);
      const expected = 5;
      expect(r).toBe(expected);
    });
  });
});
describe('Given this function', () => {
  describe('When we have an array and a parameter', () => {
    test('Then  if the array is [1, 2, 3, 4, 5, 6] find index (elem => 0) should be -1', () => {
      const aData = [1, 2, 3, 4, 5, 6];
      const r = aFindIndex(aData, 0);
      const expected = -1;
      expect(r).toBe(expected);
    });
  });
});
describe('Given the array [1, 2, 3, 4, 5] when using Filter', () => {
  test('Then  if the array is [1, 2, 3, 4, 5] filter(elem => > 3) should give a new array', () => {
    const aData = [1, 2, 3, 4, 5];

    function condition(a) {
      if (a > 3) {
        return true;
      }
    }

    const r = aFilter(aData, condition);
    const expected = [4, 5];
    expect(r).toEqual(expected);
  });
});

describe('Given the array [1, 2, 3, 4, 5] when using Map', () => {
  test('Then  if the function is (elem => elem * 2) it should return [2, 4, 6, 8, 10]', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aMap(aData, '*', 2);
    const expected = [2, 4, 6, 8, 10];
    expect(r).toEqual(expected);
  });

  test('Then  if the function is (elem => elem / 2) it should return [0.5, 1, 1.5, 2, 2.5]', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aMap(aData, '/', 2);
    const expected = [0.5, 1, 1.5, 2, 2.5];
    expect(r).toEqual(expected);
  });

  test('Then  if the function is (elem => elem + 2) it should return [3, 4, 5, 6, 7]', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aMap(aData, '+', 2);
    const expected = [3, 4, 5, 6, 7];
    expect(r).toEqual(expected);
  });

  test('Then  if the function is (elem => elem - 2) it should return [-1, 0, 1, 2, 3]', () => {
    const aData = [1, 2, 3, 4, 5];
    const r = aMap(aData, '-', 2);
    const expected = [-1, 0, 1, 2, 3];
    expect(r).toEqual(expected);
  });
});

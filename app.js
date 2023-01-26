export const aLength = (aData) => {
  let n = 0;
  while (aData[n] !== undefined) {
    n++;
  }

  return n;
};

export const aPush = (aData, b) => {
  aData[aLength(aData)] = b;
  const z = aLength(aData);
  return z;
};

export const aPop = (aData) => {
  const x = aData[aLength(aData) - 1];
  aData.length = aLength(aData) - 1;
  return x;
};

export const aUnshift = (aData, b) => {
  let n = aLength(aData);
  do {
    aData[n] = aData[n - 1];
    n--;
  } while (n > 0);

  aData[0] = b;
  return aLength(aData);
};

export const aShift = (aData) => {
  const x = aData[0];
  let n = 1;
  do {
    aData[n - 1] = aData[n];
    n++;
  } while (n < aLength(aData));

  aData.length -= 1;
  return x;
};

export const aSome = (aData, b) => {
  let y = 0;

  for (const i of aData) {
    if (aData[i] === b) {
      y++;
    }
  }

  if (y > 0) {
    return true;
  }

  return false;
};
// const aData = [5, 5, 5, 5, 5];

export const aEvery = (aData, b) => {
  let z = 0;
  for (let i = 0; i < aLength(aData); i++) {
    if (aData[i] !== b) {
      z++;
    }
  }

  if (z > 0) {
    return false;
  }

  return true;
};

export const aFind = (aData, b) => {
  for (let i = 0; i < aLength(aData); i++) {
    if (aData[i] === b) {
      return aData[i];
    }
  }
};

export const aFindIndex = (aData, b) => {
  for (let i = 0; i < aLength(aData); i++) {
    if (aData[i] === b) {
      return i;
    }
  }
};



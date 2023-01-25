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
  return x;
};

export const aUnshift = (aData, b) => {
  let n = aLength(aData);
  do {
    aData[n] = aData[n - 1];
    n--;
  } while (n > 0);

  aData[0] = b;
  console.log(aData);
  return aLength(aData);
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

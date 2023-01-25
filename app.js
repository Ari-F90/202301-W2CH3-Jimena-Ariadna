export const aLength = (aData) => {
  let n = 0;
  while (aData[n] !== undefined) {
    n++;
  }

  return n;
};

export const aPush = (aData, x) => {
  aData[aLength(aData)] = x;
  return aData;
};

export const aPop = (aData) => {
  const x = aData[aLength(aData) - 1];
  return x;
};

export const aLength = (aData) => {
  let n = 0;
  while (aData[n] !== undefined) {
    n++;
  }
  return n;
};
export const aPush = (aData, b) => {
  const z = aLength(aData) + 1;
  return z;
};

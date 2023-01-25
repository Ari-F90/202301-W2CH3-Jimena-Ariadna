export const aLength = (aData) => {
  let n = 0;
  while (aData[n] !== undefined) {
    n++;
  }

  return n;
};

// const aPush = (aData, x) => {
//   aData[aLenght(aData)] = x;
//   return aData;
// };


export function doubleIt(i) {
  return i * 2;
}

export function isEven(i) {
  if (i % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

export function whatExtension(i) {
  if (i.indexOf('.') < 0) {
    return false;
  }
  const filenameParts = i.split('.');
  return filenameParts[filenameParts.length - 1];
}

export function longestString(array) {
  let longestLength = 0;
  let returnString = '';
  array.forEach(function (item) {
    if (typeof item === 'string' && item.length > longestLength) {
      longestLength = item.length;
      returnString = item;
    }
  });
  return returnString;
}

export function arraySum(i) {
  let sum = 0;
  function sumArray(i) {
    i.forEach(function (item) {
      if (typeof item === 'number') {
        sum = sum + item;
      }if (item instanceof Array) {
        sum = sum + sumArray(item);
      }
    });
    return sum;
  }
  return sumArray(i);
}
//# sourceMappingURL=functions.js.map
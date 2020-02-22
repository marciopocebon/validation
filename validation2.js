const validPin2 = pinCode => {
  let numArr = [],
    sum = 0,
    strArr = pinCode.split("");
  strArr.forEach(digit => {
    numArr.push(parseInt(digit));
    sum += parseInt(digit);
  });
  numArr.map(i => {
    diff = numArr[i + 1] == numArr[0] ? false : true;
  });
  result =
    sum > 5 &&
    !isNaN(pinCode) &&
    pinCode.length == 4 &&
    pinCode[3] % 2 == 0 &&
    diff;
  return result;
};


const validPin2 = pinCode => {
  let num1 = [],
    sum = 0,
    strArr = pinCode.split("");
  strArr.forEach(digit => {
    num1.push(parseInt(digit));
    sum += parseInt(digit);
  });
  num1.map(i => {
    diff = num1[i + 1] == num1[0] ? false : true;
  });
  return (
    sum > 5 &&
    !isNaN(pinCode) &&
    pinCode.length == 4 &&
    pinCode[3] % 2 == 0 &&
    diff
  );
};
validPin2();

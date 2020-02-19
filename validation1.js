const validPin1 = pinCode => {
  let strArr = pinCode.split("");
  let num = strArr.map(digit => parseInt(digit));
  let sum = num.reduce((a, b) => a + b);
  for (let i of num) {
    diff = num[i + 1] == num[0] ? false : true;
  }
  return (
    sum > 5 &&
    !isNaN(pinCode) &&
    pinCode.length == 4 &&
    pinCode[3] % 2 == 0 &&
    diff
  );
};
validPin1();

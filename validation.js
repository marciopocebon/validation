const validPin = pinCode => {
  let strToArr = pinCode.split("");
  let num = strToArr.map(word => parseInt(word));
  let sum = num.reduce((a, b) => a + b);
  let diff = num.filter(a => a == num[0]).length == num.length;
  return strToArr == isNaN ||
    strToArr.length !== 4 ||
    strToArr[3] % 2 !== 0 ||
    sum < 5 ||
    diff
    ? false
    : true;
};
validPin();

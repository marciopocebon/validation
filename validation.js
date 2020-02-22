const validPin = pinCode => {
  let strToArr = pinCode.split(""),
    num = strToArr.map(word => parseInt(word)),
    sum = num.reduce((a, b) => a + b),
    diff = num.filter(a => a == num[0]).length == num.length;
  result =
    strToArr == isNaN ||
    strToArr.length !== 4 ||
    strToArr[3] % 2 !== 0 ||
    sum < 5 ||
    diff
      ? false
      : true;
  return result;
};


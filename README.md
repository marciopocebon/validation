## Create a function that fulfills the following requirements:
* The pin code must consist of only numbers.
* The pin code must be 4 digits long.
* The pin should have at least **two** different digits.
* The pin code's last digit should be even.
* The pin code should add up to at least 5.

#### If you want to know more about the used functions, methods, statements...ect, go to the end of the page and follow the attached links.

<br>

### This code challanges were made in three different ways, accompanied by a general explanation of the codes.
```javascript
const validPin = pinCode => {
  let strToArr = pinCode.split(""),
    num = strToArr.map(word => parseInt(word)),
    sum = num.reduce((a, b) => a + b),
    diff = num.filter(a => a == num[0]).length == num.length;
  
```
### 1st solution:



![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation/va1.png)
### Explanation of the 1st part:

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation/val2.png)
### Explanation of the 2nd part:

<br>

### 2 using [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) statement, [``](), [``](), [``](), [``]().
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val11.png)
### Explanation of the 1st part:

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val22.png)
### Explanation of the 2nd part:

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val33.png)
### Explanation of the 3rd part:

<br>

### 3 using [``](), [``](), [``](), [``](), [``](), [``](). 
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val111.png)
### Explanation of the 3rd part:

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val222.png)
### Explanation of the 3rd part:

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val333.png)
### Explanation of the 3rd part:

<br>

###### Change the `function` name in the `function-calls` in order to check the results for the other solutions.
![](https://github.com/ZakariaHn/validation/blob/master/Images/consolLogValidPin.png)
![](https://github.com/ZakariaHn/validation/blob/master/Images/resultValidPin.png)

<br>

# Resources:
[`filter()`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), 
[`map()`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Map), 
[`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), 
[`parseInt()`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt), 
[`logical-operators || and &&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators), 
[`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of), 
[`forEach()`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), 
[`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
[`isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
[`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
[`Comparision Operators`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison)

#### <p align = "center">`If (you notice typo || logical errors) please {console.log("Where is the error!")};`</p>
#### <p align = "center">Thanks for reading till the end `:)` </p>

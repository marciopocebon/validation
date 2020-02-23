# If the pin code is valid!
## Create a function that fulfills the following requirements:
### The pin code should:
* be consist of **only numbers**.
* be **4 digits** long.
* have at least **two** different digits.
* have the last digit **even**.
* add up to at least **5**.
<br>

## This code challanges were made in three different ways, accompanied by a general explanation of the codes.

<br>

#### Three functions were created with the names `validPin1/ 2/ 3`, each takes one argument `pinCode` which converted to an array of strings using `split()`. **Let's go and see what is in this three functions!.

<br>

### 1st solution:
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation/va1.png)
Appling `map()` on the array and convering each index from a string to a number using `parseInt()` and store the value in `num`.  
adding up the numbers in `num` using `reduce()` and storing the value in `sum`. 
If we want to see if tow digits are diffrent, we can compare the first index of the array with the other digits individualy using `filter()` array-method. The length of the filterd array should be equal to the length of the original one.

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation/val2.png)
Decalring a variable `result` and assign the value of my comparison process into it.
our comparison with the `logical-operator or ||` will return `false` if for each truthy condition (which should be false in relation to the **requirements**) and vice versa.
when result is returned we'll get the bolian values vor our conditions.

<br>

### 2nd solution
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val11.png)
#### 1st part of the code, is exactly the same like the first part of the previous solution, but without the `filter()` thing!
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val22.png)
Instead filter, i'm using here `for...of` statement and storing a poolean value `? false : true;` inside `diff`. The poolean value should teel us, if any of the indexes inside `num` (counting from 1) is equal to the index 0 of the same array `[i + 1] == num[0]`

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val33.png)
### Explanation of the last part:
```javascript
 result =
      sum > 5 &&
      !isNaN(pinCode) &&
      pinCode.length == 4 &&
      pinCode[3] % 2 == 0 &&
      diff;
  }
  return result;
};
```
<br>

### 3rd solution
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val111.png)
### Explanation of the 1st part:
```javascript
```
<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val222.png)
### Explanation of the 2nd part:
```javascript
```
<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val333.png)
### Explanation of the last part:
```javascript
```
<br>

### You can check out the codes by navigating between this three branches of my repository: 
[](https://github.com/ZakariaHn/validation/blob/validation/validation.js) 
[](https://github.com/ZakariaHn/validation/blob/validation1/validation1.js) 
[](https://github.com/ZakariaHn/validation/blob/validation2/validation2.js)

###### Change the `function` name in the `function-calls` in order to check the results for the other solutions.
![](https://github.com/ZakariaHn/validation/blob/master/Images/consolLogValidPin.png)
![](https://github.com/ZakariaHn/validation/blob/master/Images/resultValidPin.png)

<br>
#### To know more about the used functions, methods, elements...ect, go to the end of the page and follow the attached links.
# Resources:
[`filter()`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 
[`map()`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Map) 
[`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) 
[`parseInt()`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/parseInt) 
[`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) 
[`forEach()`](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 
[`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 
[`split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) 
[`Comparision Operators`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison) 
[`isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 
[`logical-operators || and &&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)

#### <p align = "center">`If (you spot typo || logical errors) please {return "Where is the error!"};`</p>
<br>

#### <p align = "center">Thanks for reading till the end `:)` </p>

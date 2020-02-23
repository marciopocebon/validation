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

#### Three functions were created with the names `validPin/ 1/ 2`, each takes one argument `pinCode` which converted to an array of strings using `split()`. **Let's go and see what is in these three functions!**.
```javascript
const validPin/ 1/ 2 = pinCode => {
  let strToArr = pinCode.split(""),
  ```
  
<br>

### validPin
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation/va1.png)
Appling `map()` on the array and converting each index from a string to a number using `parseInt()` and store the value in `num`. Then adding up the numbers in `num` using `reduce()` and storing the value in `sum`.  
If we want to see if tow digits are different, we can compare the first index of the array with the other digits individually using `filter()` array-method.  
The length of the filtered array should be equal to the length of the original one.

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation/val2.png)
Declaring a variable `result` and assign the value of my comparison process into it.
our comparison with the `logical-operator or ||` will return `false` for each truthy condition (which should be false in relation to the **requirements**) and vice versa.
When result is returned, we'll get the boolean values for our conditions.

<br>

### validPin1

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val11.png)

##### 1st part of the code, is exactly the same like the first part of the previous solution, but without the `filter()` thing!

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val22.png)
Instead filter, i'm using here `for...of` statement and storing a boolean value `? false : true;` inside `diff`. The boolean value should tell us, if any of the indexes inside `num` (counting from index 1) is equal to the index 0 of the same array `[i + 1] == num[0].`

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val33.png)

#### Check conditions
With the `logical-operator and &&` and return `true`, for each truthy condition and vice versa.  
Finally, return `result`, where all of our boolean values are stored.

<br>

### validPin2

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val111.png)

* Decalring a varaible and assign an empty are as a vlaue to it.
* Deaclring another variabel with initial value of 0.
* Creating a function inside `forEach()` array-method, that is going to:  
  * take each index from the array and change it's data type to `number`.
  * push the number to the empty arr `numArr`.
  * hold the value of the first index of the array in `sum`, and add the next values to it using the `addition assignment +=`. 

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val222.png)

The same concept applied in the last solution with using `for...of` statement in order to check the different numbers is applied here again using `map()` array-method.

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val333.png)

#### Check conditions
With the `logical-operator and &&` and return `true`, for each truthy condition and vice versa.  
Finally, return `result`, where all of our boolean values are stored.

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
[`comparision operators`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) 
[`isNaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN) 
[`logical operators || and &&`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
[conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

#### <p align = "center">`If (you spot typo || logical errors) please {return "Where is the error!"};`</p>
<br>

#### <p align = "center">Thanks for reading till the end `:)` </p>

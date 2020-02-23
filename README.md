# Create a function that fulfills the following requirements:
### The pin code should:
* Be consist of **only numbers**.
* be **4 digits** long.
* Have at least **two** different digits.
* Have the last digit **even**.
* Add up to at least **5**.
<br>

## This code challanges were made in three different ways, accompanied by a general explanation of the codes.

#### To know more about the used functions, methods, elements...ect, go to the end of the page and follow the attached links.

<br>

### 1st solution:
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation/va1.png)
### Explanation of the 1st part:
After creating the function and getting an array out of the input, I'm appling `map()` on the array and convering each index from a string to a number using `parseInt()` and store the value in `num`.  
adding up the numbers in `num` using `reduce()` and storing the value in `sum`. 
If we want to see if tow digits are diffrent, we can compare the first index of the array with the other digits individualy using `filter()` array-method. The length of the filterd array should be equal to the length of the original one.

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation/val2.png)
### Explanation of the 2nd part:
Decalring a variable `result` and assign the value of my comparison process into it.
our comparison with the `logical-operator or ||` will return `false` if for each truthy condition (which should be false in relation to the **requirements**) and vice versa.
when result is returned we'll get the bolian values vor our conditions.

<br>

### 2nd solution
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val11.png)
### Explanation of the 1st part:

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val22.png)
### Explanation of the 2nd part:

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation2/val33.png)
### Explanation of the 3rd part:

<br>

### 3rd solution
![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val111.png)
### Explanation of the 1st part:

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val222.png)
### Explanation of the 2nd part:

<br>

![code](https://github.com/ZakariaHn/validation/blob/master/Images/validation3/val333.png)
### Explanation of the 3rd part:

<br>
### You can check out the codes by navigating between this three branches of my repository: 
[](https://github.com/ZakariaHn/validation/blob/validation/validation.js) 
[](https://github.com/ZakariaHn/validation/blob/validation1/validation1.js) 
[](https://github.com/ZakariaHn/validation/blob/validation2/validation2.js)

###### Change the `function` name in the `function-calls` in order to check the results for the other solutions.
![](https://github.com/ZakariaHn/validation/blob/master/Images/consolLogValidPin.png)
![](https://github.com/ZakariaHn/validation/blob/master/Images/resultValidPin.png)

<br>

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

#### <p align = "center">`If (you spot typo || logical errors) please {console.log("Where is the error!")};`</p>
#### <p align = "center">Thanks for reading till the end `:)` </p>

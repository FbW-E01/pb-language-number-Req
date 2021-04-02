// #### 1. Concatenation. 
// * Create two variables. One variable should contain a string value and the other should contain a number. Concatenate the string and the number.
// ```javascript
// let introSentence = "hello, my name is Fran and I am";
// let age = 25;
// ```
// **Expected Output**: 
// ```javascript
// "hello, my name is Fran and I am 25"
// ```
// * In this case, what is the `+` operator doing? Comment your answer in the js file.

const introSentence = "Hello, my name is Leoj Nenotlep and I am ";
const age = 35;
console.log(introSentence + age);
// Here the + operator is concatenating the string and the number
// Meaning that the number is added to the end of the string


// #### 2. Converting 
// * Create a variable with the value of "1005". Convert it to a number.
// * Create a variable with the value of "10.05". Convert it to a number. 

const first = "1005";
console.log(typeof parseInt(first));
console.log(typeof first);

const second = "10.05";
console.log(typeof parseFloat(second));
console.log(typeof second);
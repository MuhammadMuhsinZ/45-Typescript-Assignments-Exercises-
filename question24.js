"use strict";
// more test condition 
// Tests of equality and inequality with strings
let Orgstring01 = `PIAIC`;
let Orgstring02 = `GAIMWD`;
console.log("String equality test: Is 'PIAIC' equal to 'GAIMWD'?");
console.log(Orgstring01 == Orgstring02);
console.log("String equality test: Is 'PIAIC' equal to 'GAIMWD'?");
console.log(Orgstring01 != Orgstring02);
// Tests using the lower case function
let UpperCaseString = `PIAIC`;
let LowerCaseString = `GAIMWD`;
console.log("Testing Lower case function: is `PIAIC` eqaul to `GAIMWD`?");
console.log(UpperCaseString.toLowerCase() === LowerCaseString);
console.log("Testing Lower case function: is `PIAIC` eqaul to `GAIMWD`?");
console.log(UpperCaseString.toLowerCase() != LowerCaseString);
// Numerical Test
let Num1 = 78;
let Num2 = 56;
console.log("Testing the Numberical function");
console.log(Num1 == Num2);
console.log(Num1 != Num2);
console.log(Num1 > Num2);
console.log(Num1 < Num2);
console.log(Num1 >= Num2);
console.log(Num1 <= Num2);
//  test using `and` & `or` operators
let Condition1 = "PIAIC";
let Condition2 = "CEO Sir Zia Khan";
console.log(Condition1 && Condition2);
console.log(Condition1 || Condition2);
// testing array 
// whether Items in array
let Fruits = ["Apple", "Banana", "PineApple", "Orange", "Stewaberry"];
console.log(Fruits.includes(`Banana`));
// whether items in not array
console.log(!Fruits.includes(`Grapes`));

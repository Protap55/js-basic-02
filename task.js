// // Problem:01

// // Free Drinks
// //     - Burger more than 500tk: free Coke
// //     - Else Coke: 30tk

// let burger = 600;
// let coke = 30;
// let payment;
// if (burger > 500) {
//   payment = burger;
//   console.log(`Burger price: ${payment} tk & Free coke offer`);
// } else {
//   payment = burger + coke;
//   console.log("Burger price & Coke price:", payment);
// }

// // Problem:02
// /***

// Grade Calculator

// Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//     A: 90-100
//     B: 80-89
//     C: 70-79
//     D: 60-69
//     F: 0-59

// ***/

// let marks = 2;

// if (marks < 0 || marks > 100) {
//   console.log("Input invaild number");
// } else if (marks >= 0 && marks <= 59) {
//   console.log("Your Grade: F");
// } else if (marks <= 69) {
//   console.log("Your Grade: D");
// } else if (marks <= 79) {
//   console.log("Your Grade: C");
// } else if (marks <= 89) {
//   console.log("Your Grade: B");
// } else {
//   console.log("Your Grade: A");
// }

// // Problem:03
// /***

// if you get more then 80 then inside your friend score.
//     If your friend get more than 80. then go for a lunch.
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time.
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

// Note:
// use nested if-else-if-else
// */

// let myScore = 80;
// let myFriendScore = 20;

// if (myScore >= 80 && myScore <= 100) {
//   if (myFriendScore >= 80) {
//     console.log("Go for a lunch");
//   } else if (myFriendScore >= 60 && myFriendScore < 80) {
//     console.log("Good luck next time");
//   } else if (myFriendScore >= 40 && myFriendScore < 60) {
//     console.log("keep my friend message unseen");
//   } else {
//     console.log("Block");
//   }
// } else {
//   console.log("go to home and sleep and act sad");
// }


// Problem:04
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

//if/else condition use
// const num1 = 100;
// const num2 = 60;
// let result;

// if (num1 > num2) {
//   result = num1 * 2;
// } else {
//   result = num1 + num2;
// }
// console.log(result);

//ternary use

// const num1 = 10;
// const num2 = 60;
// let result;

// result = num1 > num2 ? num1 * 2 : num1 + num2;
// console.log(result);



// // Problem:05
// /***

// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk
// */
// let ticketPrice = 800;
// let isStudent = true;
// let age = 61;

// if (age > 0 && age < 10) {
//   ticketPrice = 0;
//   console.log("Ticket free");
// } else if (age >= 60) {
//   ticketPrice = ticketPrice * 0.85;
// } else if (isStudent && age >= 10) {
//   ticketPrice = ticketPrice / 2;
// } else if (age >= 10) {
//   ticketPrice = ticketPrice;
// } else {
//   console.log("Invaild input");
// }

// console.log("Payment:", ticketPrice, "tk");






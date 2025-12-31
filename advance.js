// Problem 1: Smart Ticket Pricing System

// তোমাকে একটি ticket system বানাতে হবে।

// Given

// basePrice = 1200

// age

// isStudent (true/false)

// isVIP (true/false)

// Rules

// Age < 8 → Free ticket

// Age ≥ 60 → 40% discount

// Student → 30% discount

// VIP → extra 20% discount (সব discount এর পরে)

// একাধিক discount থাকলে priority অনুযায়ী apply করতে হবে

// 👉 Final payable amount print করো।

//

// Problem 2: Employee Salary Evaluation

// একজন employee-এর salary status নির্ধারণ করো।

// Given

// salary

// experience (years)

// performanceRating (1–5)

// Conditions

// Salary < 20k → "Low Salary"

// Salary 20k–40k → "Medium Salary"

// Salary > 40k → "High Salary"

// Bonus Rules

// Experience ≥ 5 AND rating ≥ 4 → bonus 20%

// Experience ≥ 2 AND rating ≥ 3 → bonus 10%

// Otherwise → no bonus

// 👉 Final salary + category দেখাও।

// let salary = 50000;
// let experience = 5;
// let performanceRating = 5;
// let finalSalary;
// let category;

// if (salary < 20000) {
//   category = "Low Salary";
// } else if (salary >= 20000 && salary <= 40000) {
//   category = "Medium Salary";
// } else if (salary > 40000) {
//   category = "High Salary";
// } else {
//   category = "Invalid input";
// }

// console.log("Salary Category:", category);

// if (experience >= 5 && performanceRating >= 4) {
//   finalSalary = salary + salary * 0.2;
// } else if (experience >= 2 && performanceRating >= 3) {
//   finalSalary = salary + salary * 0.1;
// } else {
//   finalSalary = salary;
//   console.log("Salary without bonus:", finalSalary);
// }
// console.log("Final payment:", finalSalary);

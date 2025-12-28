// const sallery = 50000;
// const Cader = true;
// const age = 25;

// if (sallery > 2000 && age <= 27) {
//   console.log("Wedding");
// } else {
//   console.log("Bari ja vag");
// }

// const age = 25000;
// const height = 72;
// const sallery = 40000;
// const cader = true;

// if (age <= 12000 || height >= 74 || sallery >= 42000 || cader === true) {
//   console.log("Wedding done");
// } else {
//   console.log("sorry");
// }

// const age = 25000;
// const height = 72;
// const sallery = 40000;
// const cader = true;

// if (age >= 12000 && height <= 74 && sallery <= 42000 && cader === true) {
//   console.log("Wedding done");
// } else {
//   console.log("sorry");
// }

// const age = 25;
// const height = 72;
// const sallery = 40000;
// const cader = true;

// if ((age >= 14 && height <= 70) || cader == true) {
//   console.log("Wedding done");
// } else {
//   console.log("sorry");
// }

const amount = 11000;
let discount = 0;

if (amount >= 500 && amount <= 10000) {
  //discount 10%
  discount = amount * (10 / 100);
  console.log(discount);
} else if (amount <= 50000) {
  //discount 30%
  discount = amount * (30 / 100);
  console.log(discount);
} else if (amount <= 100000) {
  //discount 50%
  discount = amount * (50 / 100);
  console.log(discount);
} else if (amount < 200000) {
  //discount 80%
  discount = amount * (80 / 100);
  console.log(discount);
} else if (amount >= 200000) {
  //discount 90%
  discount = amount * (90 / 100);
  console.log(discount);
} else {
  console.log("No offer");
}
let myBlance = amount - discount;
console.log(myBlance);

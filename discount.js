let age = 40;
let price = 4000;

if (age >= 1 && age < 18) {
  //discount 75%
  let discount = price * 0.75;
  let billPay = price - discount;
  console.log(discount);
  console.log("Discount 75%", billPay);
} else if (age < 25) {
  //discount 25%
  let discount = price * 0.25;
  let billPay = price - discount;
  console.log(discount);
  console.log("Discount 25%", billPay);
} else if (age < 40) {
  //discount 35%
  let discount = price * 0.35;
  let billPay = price - discount;
  console.log(discount);
  console.log("Discount 35%", billPay);
} else if (age < 60) {
  //discount 50%
  let discount = price * 0.5;
  let billPay = price - discount;
  console.log(discount);
  console.log("Discount 50%", billPay);
} else if (age < 80) {
  //discount 80%
  let discount = price * 0.8;
  let billPay = price - discount;
  console.log(discount);
  console.log("Discount 80%", billPay);
} else {
  console.log("Free take a food");
}

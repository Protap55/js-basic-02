const amount = 800;

if (amount >= 100 && amount <= 299) {
  console.log("you are middleclass");
} else {
  if (amount >= 300 && amount <= 499) {
    console.log("you are gold");
  } else {
    if (amount >= 500 && amount <= 799) {
      console.log("you are silver");
    } else {
      if (amount >= 800) {
        console.log("you are diamond");
      } else {
        console.log("vai bari ja");
      }
    }
  }
}

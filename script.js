const makeChange = (c) => {
  // your name here
const change = {};

  change.q = Math.floor(c / 25); // Number of quarters
  amount %= 25;

  change.d = Math.floor(c / 10); // Number of dimes
  amount %= 10;

  change.n = Math.floor(c / 5); // Number of nickels
  amount %= 5;

  change.p = c; // Remaining pennies

  return change;
	
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

const tax_rate = 0.08;
const phone_price = 89.99;
const accessory_price = 14.99;
const spending_threshold = 130;
let bank_account_balance = 500;
let amount = phone_price + accessory_price;

let subtotal;

// buy accesories for phone until spending threshold is reached
for (i = amount; i <= spending_threshold; i = i + accessory_price) {
  subtotal = i;
}

function mainComputation(amt) {
  // calculate purchase total
  amt = subtotal;
  amt = amt + (amt*tax_rate);

  // check amount against bank balance
  bank_account_balance = bank_account_balance - amt;

  // show details of purchase and bank balance
  console.log("Total Amount: $" + amt.toFixed(2));
  console.log("Remaining Balance: $" + bank_account_balance.toFixed(2));
}

mainComputation(amount);

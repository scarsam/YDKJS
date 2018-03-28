const SPENDING_THRESHOLD = Number(prompt('What is your spending threshold:'));
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

let bankBalance = Number(prompt('What is your bank balance:'));
let amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return '$' + amount.toFixed(2);
}

// Takes Bank Balance - Amount and checks if that value is larger or equal to phone price / spending threshold
function buyPhone() {
  while((bankBalance - amount) >= PHONE_PRICE) {
    amount += PHONE_PRICE;
    if((bankBalance - amount) >= SPENDING_THRESHOLD) {
      amount += ACCESSORY_PRICE;
    }
  }
  // Logs the price after tax calculation and checks if the price is less than the Bank balance, if so print it out.
  amount += calculateTax(amount);
  if(amount < bankBalance) {
    console.log('Here is your total ' + formatAmount(amount))
  } else {
    console.log('Sorry you don\'t have enough money ' + formatAmount(amount));
  }
}





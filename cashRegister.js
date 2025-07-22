
//Solution for Cash Register
//JS

function checkCashRegister(price, cash, cid) {
  const Cash = {
    "PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25,
    "ONE": 1, "FIVE": 5, "TEN": 10, "TWENTY": 20, "ONE HUNDRED": 100
  };

  let change = cash - price;
  let givenChange = [];
  let inDrawer = 0;

  for (const [coin, coinValue] of cid) {
    inDrawer += coinValue;
  }

  if (inDrawer < change) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (inDrawer === change) {
    return { status: "CLOSED", change: cid };
  } else {
    for (let i = cid.length - 1; i >= 0; i--) {
      const coin = cid[i][0];
      const coinValue = Cash[coin];
      const coinAvailable = cid[i][1];
      const maxCoinsToReturn = Math.floor(coinAvailable / coinValue);
      const coinsToReturn = Math.min(maxCoinsToReturn, Math.floor(change / coinValue));

      if (coinsToReturn > 0) {
        givenChange.push([coin, coinsToReturn * coinValue]);
        change -= coinsToReturn * coinValue;
        change = Math.round(change * 100) / 100; // Fix floating point precision issue
      }
    }

    if (change === 0) {
      return { status: "OPEN", change: givenChange };
    } else {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


// Add functions
// Add one cat
// Sell all cats
// Reset cat inventory and money

let catInv = document.getElementById("cat-inv");
let catMoney = document.getElementById("cat-money");

let catAmt = 0; // amount of cats currently head
let catProfit = 0; // amount of profit from cats sold
let totalMoney = 0;

function addCat(){
    catAmt+=1;
    catInv.textContent = "Cat Inventory: " + catAmt;
}

function sellAllCats(){
    // find amount of profit, each cat is $5
    catProfit = catAmt * 5;
    totalMoney += catProfit;

    // add profit to current money held
    catMoney.textContent = "Cat Money: " + totalMoney;

    // reset inventory back down to 0
    // reset catAmt back down to 0
    catAmt =  0;
    catInv.textContent = "Cat Inventory: 0";
}
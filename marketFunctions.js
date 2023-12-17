// Add functions
// Add one cat
// Sell all cats
// Reset cat inventory and money

gameStarted = false

const catInv = document.getElementById("cat-inv");
const catMoney = document.getElementById("cat-money");

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

function reset(){
    // set inventory and catMoney to 0
    // reset variables

    catInv.textContent = "Cat Inventory: 0";
    catMoney.textContent = "Cat Money: 0";

    gameStarted = false;
    catAmt = 0;
    catProfit = 0;
    totalMoney = 0;
}

function startGame(){
    // Give the player a randomized amount of money
    // 1 - 9999

    if(!gameStarted){
        totalMoney = (Math.floor(Math.random() * 10000 ) + 1);
        catMoney.textContent = "Cat Money: " + totalMoney;
        gameStarted = true;
    }
    else{
        alert("You have to reset before starting a new game!")
    }
}
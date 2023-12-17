// Add functions
// Add one cat
// Sell all cats
// Reset cat inventory and money

gameStarted = false

const catInv = document.getElementById("cat-inv");
const catMoney = document.getElementById("cat-money");


let catList = [] // an array of all the cats bought
let totalMoney = 0;

function buyCat(catType){ // figure out way to optimize when larger amount of cat options
    switch(catType){ // check for sufficient funds then deduct as needed and increment catAmt
        case "Banana":
            if(Money  < 5000){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 5000;
                catMoney.textContent = "Cat Money: " + totalMoney;
            }

        case "Calico":
            if(Money  < 350){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 350;
                catMoney.textContent = "Cat Money: " + totalMoney;
            }
        case "Eepy":
            if(Money  < 2500){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 2500;
                catMoney.textContent = "Cat Money: " + totalMoney;
            }
        case "Orange":
            if(Money  < 35){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 35;
                catMoney.textContent = "Cat Money: " + totalMoney;
            }
    }
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
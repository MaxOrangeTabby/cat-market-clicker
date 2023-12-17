// Add functions
// Add one cat
// Sell all cats
// Reset cat inventory and money

gameStarted = false

const catInv = document.getElementById("cat-inv");
const catMoney = document.getElementById("cat-money");
const transactionList = document.getElementById("transactions-list");


let catList = [] // an array of all the cats bought
let totalMoney = 0;

function buyCat(catType){ // figure out way to optimize when larger amount of cat options
    switch(catType){ // check for sufficient funds then deduct as needed and push into catList
        case "Banana":
            if(totalMoney  < 5000){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 5000;
                catMoney.textContent = "Cat Money: $" + totalMoney;
                catList.push("Banana");
                recordTransaction(5000);
            }
            break;
        case "Calico":
            if(totalMoney  < 350){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 350;
                catMoney.textContent = "Cat Money: $" + totalMoney;
                catList.push("Calico");
                recordTransaction(350);
            }
            break;
        case "Eepy":
            if(totalMoney  < 2500){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 2500;
                catMoney.textContent = "Cat Money: $" + totalMoney;
                catList.push("Eepy");
                recordTransaction(2500);
            }
            break;
        case "Orange":
            if(totalMoney  < 35){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 35;
                catMoney.textContent = "Cat Money: $" + totalMoney;
                catList.push("Orange");
                recordTransaction(35);
            }
            break;
        case "Bobtail":
            if(totalMoney  < 777){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 777;
                catMoney.textContent = "Cat Money: " + totalMoney;
                catList.push("Bobtail");
                recordTransaction(777);
            }
            break;
    }
}

function reset(){
    // set inventory and catMoney to 0
    // reset variables

    catInv.textContent = "Cat Inventory: 0";
    catMoney.textContent = "Cat Money: $0";

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
        catMoney.textContent = "Cat Money: $" + totalMoney;
        gameStarted = true;
    }
    else{
        alert("You have to reset before starting a new game!")
    }
}

function recordTransaction(cost){ 
    console.log("i")// Go through array and add them to ordered list
    let transactionAll = ""
    for(let i = 0; i < catList.length; i++){
        transactionAll += `<li>${catList[i]} -${cost} </li>`
    }
    transactionList.innerHTML = transactionAll;
}
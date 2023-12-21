// Add functions
// Add one cat
// Sell all cats
// Reset cat inventory and money



let gameStarted = false;

const catInv = document.getElementById("cat-inv");
const catMoney = document.getElementById("cat-money");
const transactionList = document.getElementById("transactions-list");

let catList = [] // an array of all the cats bought
let transactionListArr = [] // parallel array of catList for the assoc. cost of each cat
let catAmt = 0;
let totalMoney = 0;


// local storage
let localStorageCatAmt = localStorage.getItem("catAmt");
let localStorageTotalMoney = localStorage.getItem("totalMoney");
let localStorageCatList = JSON.parse(localStorage.getItem("catList"))
let localStorageTransactionArr = JSON.parse(localStorage.getItem("transactionListArr"));

// render out data from local storage if there is any
if(localStorageCatAmt){ // 
    catInv.textContent = "Cat Inventory: " + localStorageCatAmt;
    catAmt = localStorageCatAmt

    //change catAmt back into a numerical value from string
    catAmt = catAmt * 1;
}

if(localStorageTotalMoney){
    totalMoney = localStorageTotalMoney;
    catMoney.textContent = "Cat Money: $" + totalMoney;
}

if(localStorageCatList){
   catList = localStorageCatList;
}

if(localStorageTransactionArr){
    for(let i = 0; i < localStorageTransactionArr.lengthfor;i++){
        transactionLi
        st.innerHTML += `<li>${catList[i]} -${localStorageTransactionArr[i]}</li>`;
    }
}

if(catAmt === 0){
    gameStarted = false;
}
else{
    gameStarted = true;
}



function buyCat(catType){ // figure out way to optimize when larger amount of cat options
    switch(catType){ // check for sufficient funds then deduct as needed and push into catList
        case "Banana":
            if(totalMoney  < 5000){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 5000;
                catList.push("Banana");
                catAmt+=1;

                catMoney.textContent = "Cat Money: $" + totalMoney;
                catInv.textContent = "Cat Inventory: " + catAmt;

                localStorage.setItem("catAmt",catAmt);
                localStorage.setItem("totalMoney",totalMoney);
                localStorage.setItem("catList", JSON.stringify(catList));

                recordTransaction("Banana",5000);
                
            }
            break;
        case "Calico":
            if(totalMoney  < 350){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 350;
                catList.push("Calico");
                catAmt+=1;

                catMoney.textContent = "Cat Money: $" + totalMoney;
                catInv.textContent = "Cat Inventory: " + catAmt;

                localStorage.setItem("catAmt",catAmt);
                localStorage.setItem("totalMoney",totalMoney);
                localStorage.setItem("catList", JSON.stringify(catList));

                recordTransaction("Calico",350);
            }
            break;
        case "Eepy":
            if(totalMoney  < 2500){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 2500;
                catList.push("Eepy");
                catAmt+=1;

                catMoney.textContent = "Cat Money: $" + totalMoney;
                catInv.textContent = "Cat Inventory: " + catAmt;

                localStorage.setItem("catAmt",catAmt);
                localStorage.setItem("totalMoney",totalMoney);
                localStorage.setItem("catList", JSON.stringify(catList));

                recordTransaction("Eeepy",2500);
            }
            break;
        case "Orange":
            if(totalMoney  < 35){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 35;
                catList.push("Orange");
                catAmt+=1;

                catMoney.textContent = "Cat Money: $" + totalMoney;
                catInv.textContent = "Cat Inventory: " + catAmt;

                localStorage.setItem("catAmt",catAmt);
                localStorage.setItem("totalMoney",totalMoney);
                localStorage.setItem("catList", JSON.stringify(catList));
                recordTransaction("Orange",35);
            }
            break;
        case "Bobtail":
            if(totalMoney  < 777){
                alert("You don't have the funds!!")
            }
            else{
                totalMoney -= 777;
                catList.push("Bobtail");
                catAmt+=1;

                catMoney.textContent = "Cat Money: $" + totalMoney;
                catInv.textContent = "Cat Inventory: " + catAmt;

                localStorage.setItem("catAmt",catAmt);
                localStorage.setItem("totalMoney",totalMoney);
                localStorage.setItem("catList", JSON.stringify(catList));
                recordTransaction("Bobtail",777);
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



    // clear transaction history
    transactionList.textContent = "";
    catList = [];
    transactionListArr = [];

    localStorage.setItem("transactionListArr", transactionListArr);
    localStorage.setItem("catAmt",catAmt);
    localStorage.setItem("totalMoney",totalMoney);
    localStorage.setItem("catList", JSON.stringify(catList));
}

function startGame(){
    // Give the player a randomized amount of money
    // 1 - 9999

    if(!gameStarted){
        totalMoney = (Math.floor(Math.random() * 10000 ) + 1);
        catMoney.textContent = "Cat Money: $" + totalMoney;
        gameStarted = true;
        localStorage.setItem("totalMoney",totalMoney);
    }
    else{
        alert("You have to reset before starting a new game!")
    }
}

function recordTransaction(catType,cost){ 

    transactionListArr.push(cost);
    localStorage.setItem("transactionListArr",JSON.stringify(transactionListArr));
    transactionList.innerHTML += `<li>${catType} -${cost} </li>`;
}

function viewCollection(){ // 
    localStorage.setItem("catList",JSON.stringify(catList));     
    window.location.href = "catCollection.html";
}





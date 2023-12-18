let catImages = document.getElementById("cat-images");
let backBtn = document.getElementById("back-btn");

// render out cat collection
let localStorageCatList = JSON.parse(localStorage.getItem("catList"));

if(localStorageCatList){ // Iterate through cat list and add to collection
    for(let i = 0; i < localStorageCatList.length; i++){
        addCatCollection(localStorageCatList[i]);
    }
}


function goBack(){
    window.location.href = "index.html";
}

function addCatCollection(catType){ // Check which cat type then add its photo to the collection
    console.log("hi")
    switch(catType){ 
        case "Banana":
            catImages.innerHTML += `<img class="collectedCat" src = "catPictures/bananaCat.jpg"></img>`;
            break;
        case "Calico":
            catImages.innerHTML += `<img class="collectedCat" src = "catPictures/calico.jpg"></img>`;
            break;
        case "Eepy":
            catImages.innerHTML += `<img class="collectedCat" src = "catPictures/eepyCat.jpg"></img>`;
            break;
        case "Orange":
            catImages.innerHTML += `<img class="collectedCat" src = "catPictures/orange.jpg"></img>`;
            break;
        case "Bobtail":
            catImages.innerHTML += `<img class="collectedCat" src = "catPictures/bobtailCat.jpg"></img>`;
            break;
    }
}


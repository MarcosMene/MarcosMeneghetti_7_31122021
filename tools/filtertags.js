/*filter
 list 
 tags */

// window.addEventListener("load", () => {
//  html elements ingredients
const inputIngredients = document.getElementById("ingredients");
const listIngredientsLi = document.querySelectorAll(
  ".search-list-ingredients li"
);

//  ATTACH KEY UP LISTENER TO SEARCH BOX
inputIngredients.onkeyup = () => {
  // GET CURRENT SEARCH TERM
  let searchIngredientsList = inputIngredients.value.toLowerCase();

  // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
  for (let i of listIngredientsLi) {
    let item = i.innerHTML.toLowerCase();
    if (item.indexOf(searchIngredientsList) == -1) {
      i.style.display = "none";
    } else {
      i.style.display = "";
    }
  }
};

//  html elements appliance
const inputAppareils = document.getElementById("appareils");
const listAppareilsLi = document.querySelectorAll(".search-list-appareils li");

//  ATTACH KEY UP LISTENER TO SEARCH BOX
inputAppareils.onkeyup = () => {
  // GET CURRENT SEARCH TERM
  let searchinputAppareilsList = inputAppareils.value.toLowerCase();

  // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
  for (let i of listAppareilsLi) {
    let item = i.innerHTML.toLowerCase();
    if (item.indexOf(searchinputAppareilsList) == -1) {
      i.style.display = "none";
    } else {
      i.style.display = "";
    }
  }
};

//  html elements ustensiles
const inputUstensiles = document.getElementById("ustensiles");
const listUstensilesLi = document.querySelectorAll(
  ".search-list-ustensiles li"
);

//  ATTACH KEY UP LISTENER TO SEARCH BOX
inputUstensiles.onkeyup = () => {
  // GET CURRENT SEARCH TERM
  let searchinputUstensilesList = inputUstensiles.value.toLowerCase();

  // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
  for (let i of listUstensilesLi) {
    let item = i.innerHTML.toLowerCase();
    if (item.indexOf(searchinputUstensilesList) == -1) {
      i.style.display = "none";
    } else {
      i.style.display = "";
    }
  }
};
// });

// onclick hide elements from de list ingredients
for (let i of listIngredientsLi) {
  i.addEventListener("click", () => {
    i.remove();
  });
}
// onclick hide elements from de list appliance
for (let i of listAppareilsLi) {
  i.addEventListener("click", () => {
    i.remove();
  });
}
// onclick hide elements from de list ustensiles
for (let i of listUstensilesLi) {
  i.addEventListener("click", () => {
    i.remove();
  });
}

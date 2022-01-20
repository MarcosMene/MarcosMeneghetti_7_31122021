/*filter
 list 
 tags */
function filterListTagsbyInput() {
  // const listItemsComplete = document.querySelectorAll(".search-item");

  //  html elements ingredients
  const inputIngredients = document.getElementById("ingredients");
  const listItemIngredients = document.querySelectorAll(
    ".search-item-ingredients"
  );

  //  html elements appliance
  const inputappliances = document.getElementById("appliances");
  const listItemAppliances = document.querySelectorAll(
    ".search-item-appliances"
  );

  //  html elements ustensiles
  const inputUstensiles = document.getElementById("ustensiles");
  const listUstensilesLi = document.querySelectorAll(".search-item-ustensils");

  //  ATTACH KEY UP LISTENER TO SEARCH BOX
  inputIngredients.onkeyup = () => {
    // GET CURRENT SEARCH TERM
    let searchIngredientsList = inputIngredients.value.toLowerCase();

    // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
    for (let i of listItemIngredients) {
      let item = i.innerHTML.toLowerCase();
      if (item.indexOf(searchIngredientsList) == -1) {
        i.style.display = "none";
      } else {
        i.style.display = "";
      }
    }
  };

  //  ATTACH KEY UP LISTENER TO SEARCH BOX
  inputappliances.onkeyup = () => {
    // GET CURRENT SEARCH TERM
    let searchinputappliancesList = inputappliances.value.toLowerCase();

    // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
    for (let i of listItemAppliances) {
      let item = i.innerHTML.toLowerCase();
      if (item.indexOf(searchinputappliancesList) == -1) {
        i.style.display = "none";
      } else {
        i.style.display = "";
      }
    }
  };

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
}

filterListTagsbyInput();

const researchAppliance = [];
const researchIngredient = [];
const researchustensils = [];
const researchName = [];

let ingredientFinal = [];
let applianceFinal = [];
let ustensilesFinal = [];
let results = [];
let inputValue = [];
let temp = [];

// remove elements from list

// onclick remove elements from de list ingredients

createMiniTagWithItemList();

// console.log(recipes)

function createList(inputValue) {
  inputValue.forEach((value) => {
    if (inputValue.length) {
      results = recipes.filter((obj) => {
        return (
          obj.name.includes(value) ||
          obj.description.includes(value) ||
          obj.ingredients.find((ingredient) =>
            ingredient.ingredient.includes(value)
          ) ||
          obj.ustensils.includes(value) ||
          obj.appliance.includes(value)
        );
      });

      // console.log(results)

      results.forEach((recipe) => {
        if (recipe.name.length) {
          researchName.push(recipe.name);
        }

        if (recipe.ingredients.length) {
          results.forEach((recipe) => {
            recipe.ingredients.forEach((ingredient) => {
              researchIngredient.push(ingredient.ingredient);
            });
          });
        }

        if (recipe.appliance.length) {
          researchAppliance.push(recipe.appliance);
        }

        if (recipe.ustensils.length) {
          for (u = 0; u < recipe.ustensils.length; u++) {
            researchustensils.push(recipe.ustensils[u]);
          }
        }
      });

      ingredientFinal = [...new Set(researchIngredient)];

      for (let i = 0; i < ingredientFinal.length; i++) {
        for (let j = 0; j < inputValue.length; j++) {
          if (ingredientFinal[i] === inputValue[j]) {
            ingredientFinal.splice(i, 1);
          }
        }
      }

      if (inputValue.length > 1) {
        for (let i = 0; i < ingredientFinal.length; i++) {
          for (let j = 0; j < temp.length; j++) {
            if (ingredientFinal[i] === temp[j]) {
              ingredientFinal.splice(i, 1);
            }
          }
        }
      }

      applianceFinal = [...new Set(researchAppliance)];

      for (let i = 0; i < applianceFinal.length; i++) {
        for (let j = 0; j < inputValue.length; j++) {
          if (applianceFinal[i] === inputValue[j]) {
            applianceFinal.splice(i, 1);
          }
        }
      }

      ustensilesFinal = [...new Set(researchustensils)];

      for (let i = 0; i < ustensilesFinal.length; i++) {
        for (let j = 0; j < inputValue.length; j++)
          if (ustensilesFinal[i] === inputValue[j]) {
            ustensilesFinal.splice(i, 1);
          }
      }

      console.log(temp);
    }
  });
}

function createMiniTagWithItemList() {
  clickItems();
  createMiniTags();
}

function clickItems() {
  const listItemIngredients = document.querySelectorAll(
    ".search-item-ingredients"
  );
  for (let i of listItemIngredients) {
    i.addEventListener("click", () => {
      inputValue.push(i.innerText); //get value list for the tag
      createList(inputValue); //call function to filter by list names
      console.log(i.innerText);
      console.log(inputValue);
      // let myIngredientsTags = getElementsInRecipes(recipes, "ingredients");
      // console.log(myIngredientsTags);
      // i.remove();
      temp.push(ingredientFinal);
      console.log(temp);
      ingredientFinal.forEach((element) => {
        for (i = 0; i < listItemIngredients.length; i++) {
          listItemIngredients[i].remove();
        }

        const searchlistIngredients = document.querySelector(
          ".search-list-ingredients"
        );
        const domIngredients = listsDOM(element, "ingredients");
        searchlistIngredients.append(domIngredients);

        // Appliances
        const listappliancesLi = document.querySelectorAll(
          ".search-item-appliances"
        );
        for (i = 0; i < listappliancesLi.length; i++) {
          listappliancesLi[i].remove();
        }

        applianceFinal.forEach((element) => {
          const searchlistAppliance = document.querySelector(
            ".search-list-appliances"
          );
          const domAppliance = listsDOM(element, "appliances");
          searchlistAppliance.append(domAppliance);
        });

        // Ustensiles
        const listUstensilesLi = document.querySelectorAll(
          ".search-item-ustensils"
        );
        for (i = 0; i < listUstensilesLi.length; i++) {
          listUstensilesLi[i].remove();
        }
      });
      createMiniTagWithItemList();

      ustensilesFinal.forEach((element) => {
        const searchListUstensiles = document.querySelector(
          ".search-list-ustensiles"
        );
        const domUstensiles = listsDOM(element, "ustensiles");
        searchListUstensiles.append(domUstensiles);
      });
      console.log(inputValue);
      console.log(ingredientFinal);
      console.log(applianceFinal);
      console.log(ustensilesFinal);
      filterListTagsbyInput();
    });
  }
}

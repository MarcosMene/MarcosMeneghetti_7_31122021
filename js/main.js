import recipes from "../data/recipes.js";

// get all elements to create tag lists ingredients/appliance/ustensils
function getElementsInRecipes(recipes, elementToGet) {
  let list = [];
  let listreduced = [];
  switch (elementToGet) {
    case "ingredients":
      recipes.forEach((recipe) => {
        if (recipe.ingredients.length) {
          const ingredientsMap = recipe.ingredients.map((ingr) =>
            ingr.ingredient.toLowerCase()
          );

          list.push(...ingredientsMap);
        }
      });
      listreduced = [...new Set(list)];

      return listreduced;

    case "appliance":
      recipes.forEach((recipe) => {
        if (recipe.appliance.length) {
          const applianceMap = recipe.appliance.toLowerCase();

          list.push(applianceMap);
        }
      });
      listreduced = [...new Set(list)];

      return listreduced;

    case "ustensils":
      recipes.forEach((recipe) => {
        if (recipe.ustensils.length) {
          const ustensilsMap = recipe.ustensils.map((ust) => ust.toLowerCase());

          list.push(...ustensilsMap);
        }
      });
      listreduced = [...new Set(list)];

      return listreduced;
  }
}

//  Create list
//  elements for
//  ingredients

const myIngredientsTags = getElementsInRecipes(recipes, "ingredients");
// remove repeated words in the array
const listIngredientsTag = new Set(myIngredientsTags);

listIngredientsTag.forEach((element) => {
  const searchlistIngredients = document.querySelector(
    ".search-list-ingredients"
  );
  const domIngredients = listsDOM(element);
  searchlistIngredients.append(domIngredients);
});

// Create
// list elements
//  for appliance

const myAppareilsTags = getElementsInRecipes(recipes, "appliance");
// remove repeated words in the array
const listApplianceTag = new Set(myAppareilsTags);

listApplianceTag.forEach((element) => {
  const searchlistAppliance = document.querySelector(".search-list-appareils");
  const domAppliance = listsDOM(element);
  searchlistAppliance.append(domAppliance);
});

// Create list
// elements for
// ustensils

const myUstensilsTags = getElementsInRecipes(recipes, "ustensils");
// remove repeated words in the array
const listUstensilsTag = new Set(myUstensilsTags);
listUstensilsTag.forEach((element) => {
  const searchlistUstensiles = document.querySelector(
    ".search-list-ustensiles"
  );
  const domUstensiles = listsDOM(element);
  searchlistUstensiles.append(domUstensiles);
});

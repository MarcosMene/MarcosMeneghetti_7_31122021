// import recipes from "../data/recipes.js";

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

//******** */
//  Create list
//  elements for
//  ingredients
//******** */

const myIngredientsTags = getElementsInRecipes(recipes, "ingredients");
// remove repeated words in the array
const listIngredientsTag = new Set(myIngredientsTags);

listIngredientsTag.forEach((element) => {
  const searchlistIngredients = document.querySelector(
    ".search-list-ingredients"
  );
  const domIngredients = listsDOM(element, "ingredients");
  searchlistIngredients.append(domIngredients);
});

//******** */
// Create
// list elements
//  for appliance
//******** */

const myAppareilsTags = getElementsInRecipes(recipes, "appliance");
// remove repeated words in the array
const listApplianceTag = new Set(myAppareilsTags);

listApplianceTag.forEach((element) => {
  const searchlistAppliance = document.querySelector(".search-list-appareils");
  const domAppliance = listsDOM(element, "appareils");
  searchlistAppliance.append(domAppliance);
});

//******** */
// Create list
// elements for
// ustensils
//******** */

const myUstensilsTags = getElementsInRecipes(recipes, "ustensils");
// remove repeated words in the array
const listUstensilsTag = new Set(myUstensilsTags);
listUstensilsTag.forEach((element) => {
  const searchlistUstensiles = document.querySelector(
    ".search-list-ustensiles"
  );
  const domUstensiles = listsDOM(element, "ustensils");
  searchlistUstensiles.append(domUstensiles);
});

//******** */
// Create
// minitags
//******** */

// ingredients
const listItemIngredients = document.querySelectorAll(
  ".search-item-ingredients"
);
const miniTags = document.querySelector("#mini-tags");
for (let i = 0; i < listItemIngredients.length; i++) {
  listItemIngredients[i].addEventListener("click", (e) => {
    e.preventDefault();

    const miniTagsChild = minitagsDOM(
      listItemIngredients[i].innerHTML,
      "primary"
    );
    miniTags.appendChild(miniTagsChild);

    const removeMiniTag = document.querySelectorAll(".tag-button");
    console.log(removeMiniTag);
    for (let j = 0; j < removeMiniTag.length; j++)
      removeMiniTag[j].addEventListener("click", () => {
        removeMiniTag[j].remove();
      });
  });
}

// Appareil
const listItemAppliances = document.querySelectorAll(".search-item-appareils");

for (let i = 0; i < listItemAppliances.length; i++) {
  listItemAppliances[i].addEventListener("click", (e) => {
    e.preventDefault();

    const miniTagsChild = minitagsDOM(
      listItemAppliances[i].innerHTML,
      "success"
    );
    miniTags.appendChild(miniTagsChild);
    const removeMiniTag = document.querySelectorAll(".tag-button");
    console.log(removeMiniTag);
    for (let j = 0; j < removeMiniTag.length; j++)
      removeMiniTag[j].addEventListener("click", () => {
        removeMiniTag[j].remove();
      });
  });
}
// Ustensils
const listItemUstensiles = document.querySelectorAll(".search-item-ustensils");

for (let i = 0; i < listItemUstensiles.length; i++) {
  listItemUstensiles[i].addEventListener("click", (e) => {
    e.preventDefault();

    const miniTagsChild = minitagsDOM(
      listItemUstensiles[i].innerHTML,
      "danger"
    );
    miniTags.appendChild(miniTagsChild);
    const removeMiniTag = document.querySelectorAll(".tag-button");
    console.log(removeMiniTag);
    for (let j = 0; j < removeMiniTag.length; j++)
      removeMiniTag[j].addEventListener("click", () => {
        removeMiniTag[j].remove();
      });
  });
}

//******** */
//Create
//Cards
//recettes
//******** */

const rowCardsRecipes = document.querySelector(".cards-recipes");

recipes.forEach((recipe) => {
  const cardRecipeModel = cardsFactory(recipe);
  const recipeCardDOM = cardRecipeModel.cardsRecipesDOM();
  rowCardsRecipes.appendChild(recipeCardDOM);
});

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
      list = [...new Set(list)]; //remove repeated ingredients
      // console.log(listreduced);
      return list;

    case "appliance":
      recipes.forEach((recipe) => {
        if (recipe.appliance.length) {
          const applianceMap = recipe.appliance.toLowerCase();
          list.push(applianceMap);
        }
      });
      list = [...new Set(list)]; //remove repeated appliance
      return list;

    case "ustensils":
      recipes.forEach((recipe) => {
        if (recipe.ustensils.length) {
          const ustensilsMap = recipe.ustensils.map((ust) => ust.toLowerCase());
          list.push(...ustensilsMap);
        }
      });
      list = [...new Set(list)];
      return list;
  }
}

//create list elements for ingredients/appliances/ustensils
function CreateListElements() {
  //******** */
  //  Create list
  //  elements for
  //  ingredients
  //******** */
  const myIngredientsTags = getElementsInRecipes(recipes, "ingredients");
  myIngredientsTags.forEach((element) => {
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

  let myappliancesTags = getElementsInRecipes(recipes, "appliance");
  myappliancesTags.forEach((element) => {
    const searchListappliances = document.querySelector(
      ".search-list-appliances"
    );
    const domAppliance = listsDOM(element, "appliances");
    searchListappliances.append(domAppliance);
  });

  //******** */
  // Create list
  // elements for
  // ustensils
  //******** */

  const myUstensilsTags = getElementsInRecipes(recipes, "ustensils");
  myUstensilsTags.forEach((element) => {
    const searchlistUstensils = document.querySelector(
      ".search-list-ustensils"
    );
    const domUstensils = listsDOM(element, "ustensils");
    searchlistUstensils.append(domUstensils);
  });
}

//******** */
//Create
//Cards
//recettes
//******** */
function createCardRecipes() {
  const rowCardsRecipes = document.querySelector(".cards-recipes");

  recipes.forEach((recipe) => {
    const cardRecipeModel = cardsFactory(recipe);
    const recipeCardDOM = cardRecipeModel.cardsRecipesDOM();
    rowCardsRecipes.appendChild(recipeCardDOM);
  });
}
CreateListElements();
createCardRecipes();

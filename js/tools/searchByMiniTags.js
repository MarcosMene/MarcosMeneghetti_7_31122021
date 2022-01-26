let resultsMiniTags = [];
let totalMiniTags = [];
function searchByMiniTags(dataValue, value) {
  switch (dataValue) {
    case "ingredients":
      resultsMiniTags = recipes.filter((obj) =>
        obj.ingredients.find((ingredient) => ingredient.ingredient === value)
      );
      for (i = 0; i < resultsMiniTags.length; i++) {
        totalMiniTags.push(resultsMiniTags[i]);
      }

      console.log(totalMiniTags);
      console.log(resultsMiniTags);

      UpdateItemsFromMiniTags();

      return resultsMiniTags;

    case "appliance":
      resultsMiniTags = recipes.filter((obj) => obj.appliance === value);

      UpdateItemsFromMiniTags();

      return resultsMiniTags;
    case "ustensils":
      // recipe.ustensils.map((ust) => ust.toLowerCase());

      let valueLowCase = value.toLowerCase();

      resultsMiniTags = recipes.filter((obj) =>
        obj.ustensils.find((ustensil) => ustensil === valueLowCase)
      );

      UpdateItemsFromMiniTags();
      return resultsMiniTags;
  }
}

function createCardRecipesMiniTags(results) {
  // show/hide message no recipes
  const MessageNoRecette = document.querySelector(".message-no-recette");
  if (results.length === 0) {
    MessageNoRecette.style.display = "block";
  } else {
    MessageNoRecette.style.display = "none";
  }

  // delete all cards
  const cardRecipe = document.querySelectorAll(".card-recipe");
  cardRecipe.forEach((item) => {
    item.remove();
  });

  // create new cards
  const rowCardsRecipes = document.querySelector(".cards-recipes");
  results.forEach((recipe) => {
    const cardRecipeModel = cardsFactory(recipe);
    const recipeCardDOM = cardRecipeModel.cardsRecipesDOM();
    rowCardsRecipes.appendChild(recipeCardDOM);
  });
}

function removeElementsFromListItems() {
  //remove element from the list of ingredients
  const listItemIngredients = document.querySelectorAll(
    ".search-item-ingredients"
  );
  for (i = 0; i < listItemIngredients.length; i++) {
    for (j = 0; j < listMiniTags.length; j++) {
      if (listItemIngredients[i].innerText === listMiniTags[j].innerText) {
        listItemIngredients[i].remove();
      }
    }
  }

  //remove element from the list of appliance
  const listItemAppliances = document.querySelectorAll(
    ".search-item-appliances"
  );
  for (i = 0; i < listItemAppliances.length; i++) {
    for (j = 0; j < listMiniTags.length; j++) {
      if (listItemAppliances[i].innerText === listMiniTags[j].innerText) {
        listItemAppliances[i].remove();
      }
    }
  }

  //remove element from the list of ustensils
  const listItemUstensils = document.querySelectorAll(".search-item-ustensils");
  for (i = 0; i < listItemUstensils.length; i++) {
    for (j = 0; j < listMiniTags.length; j++) {
      if (listItemUstensils[i].innerText === listMiniTags[j].innerText) {
        listItemUstensils[i].remove();
      }
    }
  }
}

function UpdateItemsFromMiniTags() {
  updateListTags(resultsMiniTags);
  filterListTagsbyInputTag();
  createMiniTags();
  createCardRecipesMiniTags(resultsMiniTags);
  removeElementsFromListItems();
}

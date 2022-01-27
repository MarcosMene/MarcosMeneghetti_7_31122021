let resultRecipesMiniTags = [];
let totalRecipesMiniTags = [];
let resultRecipesMultipleMiniTags = [];
function searchByMiniTags(dataValue, value) {
  //recover all elements from miniTags
  for (i = 0; i < listMiniTags.length; i++) {
    totalMiniTags.push(listMiniTags[i].innerText.toLowerCase());
  }
  totalMiniTags = [...new Set(totalMiniTags)];
  console.log(totalMiniTags);
  console.log(listMiniTags);
  let valueLowCase = value.toLowerCase();
  switch (dataValue) {
    case "ingredients":
      resultRecipesMiniTags = recipes.filter((obj) =>
        obj.ingredients.find(
          (ingredient) => ingredient.ingredient.toLowerCase() === valueLowCase
        )
      );
      totalRecipesMiniTags.push(...resultRecipesMiniTags);

      console.log(totalRecipesMiniTags);
      UpdateItemsFromMiniTags();
      break;

    case "appliance":
      resultRecipesMiniTags = recipes.filter(
        (obj) => obj.appliance.toLowerCase() === valueLowCase
      );
      totalRecipesMiniTags.push(...resultRecipesMiniTags);

      console.log(totalRecipesMiniTags);
      UpdateItemsFromMiniTags();
      break;

    case "ustensils":
      resultRecipesMiniTags = recipes.filter((obj) =>
        obj.ustensils.find(
          (ustensil) => ustensil.toLowerCase() === valueLowCase
        )
      );
      totalRecipesMiniTags.push(...resultRecipesMiniTags);

      console.log(totalRecipesMiniTags);
      UpdateItemsFromMiniTags();
      break;
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
  totalRecipesMiniTags = [...new Set(totalRecipesMiniTags)];
  console.log(totalMiniTags);
  console.log(totalRecipesMiniTags);
  if (totalMiniTags.length === 1) {
    populateTags(resultRecipesMiniTags);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(resultRecipesMiniTags);
    removeElementsFromListItems();
    console.log(totalMiniTags);
    console.log(resultRecipesMiniTags);
  } else {
    totalMiniTags.forEach((item) => {
      totalRecipesMiniTags = totalRecipesMiniTags.filter((obj) => {
        return obj.ingredients.find(
          (ingredient) =>
            ingredient.ingredient.toLowerCase().includes(item) ||
            obj.appliance.toLowerCase().includes(item) ||
            obj.ustensils.find((ustensil) =>
              ustensil.toLowerCase().includes(item)
            )
        );
      });
      console.log(resultRecipesMultipleMiniTags);
      console.log(totalRecipesMiniTags);
      populateTags(totalRecipesMiniTags);
      filterListTagsbyInputTag();
      createMiniTags();
      createCardRecipesMiniTags(totalRecipesMiniTags);
      removeElementsFromListItems();
      // console.log(totalMiniTags);
      // console.log(resultRecipesMiniTags);
    });
  }
}

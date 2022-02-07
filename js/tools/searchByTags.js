let resultRecipesMiniTags = [];
let recipesWithRepetition = [];
let totalRecipesMiniTags = [];
let resultRecipesMultipleMiniTags = [];
let uniqueValues = [];
let finalResultTotalMiniTags = [];
let resultsRecipes = [];
let totalMiniTags = [];

/////////////
///////////////
function searchByMiniTags(dataValue, value) {
  //recover all elements from miniTags
  for (i = 0; i < listMiniTags.length; i++) {
    totalMiniTags.push(
      ...[
        {
          datavalue: dataValue,
          value: listMiniTags[i].innerText.toLowerCase(),
        },
      ]
    );
  }
  // console.log(...totalMiniTags);
  //remove repeated element from de list minitags
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  //remove repeated element from totalMiniTags
  totalMiniTags = getUniqueListBy(totalMiniTags, "datavalue");
  finalResultTotalMiniTags.push(...totalMiniTags);
  // console.log(...uniqueValues);
  // console.log(...totalMiniTags);
  // console.log(...finalResultTotalMiniTags);

  // console.log(...listMiniTags);
  let valueLowCase = value.toLowerCase();
  switch (dataValue) {
    case "ingredients":
      resultRecipesMiniTags = recipes.filter((obj) =>
        obj.ingredients.find(
          (ingredient) => ingredient.ingredient.toLowerCase() === valueLowCase
        )
      );
      recipesWithRepetition.push(...resultRecipesMiniTags);

      // console.log(...recipesWithRepetition);
      // console.log(...resultRecipesMiniTags);
      UpdateItemsFromMiniTags();
      break;

    case "appliance":
      resultRecipesMiniTags = recipes.filter(
        (obj) => obj.appliance.toLowerCase() === valueLowCase
      );
      recipesWithRepetition.push(...resultRecipesMiniTags);

      // console.log(...recipesWithRepetition);
      UpdateItemsFromMiniTags();
      break;

    case "ustensils":
      resultRecipesMiniTags = recipes.filter((obj) =>
        obj.ustensils.find(
          (ustensil) => ustensil.toLowerCase() === valueLowCase
        )
      );
      recipesWithRepetition.push(...resultRecipesMiniTags);

      // console.log(...recipesWithRepetition);
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
  finalResultTotalMiniTags = [...new Set(finalResultTotalMiniTags)];
  // console.log(...finalResultTotalMiniTags);
  // console.log(...totalMiniTags);
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
  //remove repeated recipes from the list of minitags
  totalRecipesMiniTags = [...new Set(recipesWithRepetition)];
  // console.log(...totalRecipesMiniTags);
  // console.log("----------");
  // console.log(...finalResultTotalMiniTags);
  // console.log("----------");
  finalResultTotalMiniTags.forEach((item) => {
    totalRecipesMiniTags = totalRecipesMiniTags.filter((obj) => {
      switch (item.datavalue) {
        case "ingredients":
          return obj.ingredients.find(
            (ingredient) => ingredient.ingredient.toLowerCase() === item.value
          );
        case "appliance":
          return obj.appliance.toLowerCase() === item.value;
        case "ustensils":
          return obj.ustensils.find(
            (ustensil) => ustensil.toLowerCase() === item.value
          );
      }
    });

    populateTags(totalRecipesMiniTags);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(totalRecipesMiniTags);
    removeElementsFromListItems();
  });
  // console.log(...totalRecipesMiniTags);
}

function removeMiniTag(item) {
  const clickedElementValue = item.target || item.srcElement;
  const clickedElementValueLower = clickedElementValue.innerText.toLowerCase();
  const clickedElementDataValue =
    clickedElementValue.parentElement.getAttribute("datavalue");
  const htmlElemToRemove = clickedElementValue.parentElement;
  htmlElemToRemove.remove();

  const pos = finalResultTotalMiniTags.findIndex(
    (obj) =>
      obj.datavalue === clickedElementDataValue &&
      obj.value === clickedElementValueLower
  );
  finalResultTotalMiniTags.splice(pos, 1);
  // console.log(clickedElementDataValue);
  // console.log(clickedElementValueLower);

  // console.log(...listMiniTags.innerText);

  for (i = 0; i < listMiniTags.length; i++) {
    if (listMiniTags[i].innerText.toLowerCase() === clickedElementValueLower) {
      listMiniTags.splice(i, 1);
    }
  }
  // console.log(...listMiniTags);
  // console.log(...finalResultTotalMiniTags);
  let removeMiniTag = document.querySelectorAll(".tag-button");
  if (removeMiniTag.length === 0) {
    resultsRecipes = recipes;

    populateTags(resultsRecipes);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(resultsRecipes);
    // reset all arrays
    resultRecipesMiniTags = [];
    recipesWithRepetition = [];
    totalRecipesMiniTags = [];
    resultRecipesMultipleMiniTags = [];
    uniqueValues = [];
    finalResultTotalMiniTags = [];
    resultsRecipes = [];
    listMiniTags = [];

    totalMiniTags = [];
    list = [];
    listreduced = [];
    ingredientsResult = [];
    reducedIngredient = [];
    appliancesResult = [];
    reducedAppliance = [];
    ustensilsResult = [];
    reducedUstensils = [];
  }
  UpdateItemsFromMiniTags();
  // searchByMiniTags(clickedElementDataValue, clickedElementValueLower);
}

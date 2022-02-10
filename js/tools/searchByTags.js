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
  //console.log(totalMiniTags);
  //remove repeated element from de list minitags
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  //remove repeated element from totalMiniTags
  totalMiniTags = getUniqueListBy(totalMiniTags, "datavalue");
  finalResultTotalMiniTags.push(...totalMiniTags);
  //console.log(uniqueValues);
  //console.log(totalMiniTags);
  //console.log(finalResultTotalMiniTags);

  //console.log(listMiniTags);
  let valueLowCase = value.toLowerCase();
  switch (dataValue) {
    case "ingredients":
      resultRecipesMiniTags = recipes.filter((obj) =>
        obj.ingredients.find(
          (ingredient) => ingredient.ingredient.toLowerCase() === valueLowCase
        )
      );
      recipesWithRepetition.push(...resultRecipesMiniTags);

      //console.log(recipesWithRepetition);
      //console.log(resultRecipesMiniTags);
      UpdateItemsFromMiniTags();
      break;

    case "appliance":
      resultRecipesMiniTags = recipes.filter(
        (obj) => obj.appliance.toLowerCase() === valueLowCase
      );
      recipesWithRepetition.push(...resultRecipesMiniTags);

      //console.log(recipesWithRepetition);
      UpdateItemsFromMiniTags();
      break;

    case "ustensils":
      resultRecipesMiniTags = recipes.filter((obj) =>
        obj.ustensils.find(
          (ustensil) => ustensil.toLowerCase() === valueLowCase
        )
      );
      recipesWithRepetition.push(...resultRecipesMiniTags);

      //console.log(recipesWithRepetition);
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
  // //console.log(finalResultTotalMiniTags);
  // //console.log(totalMiniTags);
  // //console.log(listMiniTags);
  //remove element from the list of ingredients
  const listAllItems = document.querySelectorAll(".search-item");
  for (i = 0; i < listAllItems.length; i++) {
    for (j = 0; j < listMiniTags.length; j++) {
      if (listAllItems[i].innerText === listMiniTags[j].innerText) {
        listAllItems[i].remove();
      }
    }
  }
}

function resetAllArrays() {
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

function UpdateItemsFromMiniTags() {
  //remove repeated recipes from the list of minitags
  totalRecipesMiniTags = [...new Set(recipesWithRepetition)];
  //console.log(totalRecipesMiniTags);
  //console.log("----------");
  //console.log(finalResultTotalMiniTags);
  //console.log("----------");
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
  //console.log(totalRecipesMiniTags);
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
  //console.log(clickedElementDataValue);
  //console.log(clickedElementValueLower);

  for (i = 0; i < listMiniTags.length; i++) {
    if (listMiniTags[i].innerText.toLowerCase() === clickedElementValueLower) {
      listMiniTags.splice(i, 1);
    }
  }
  //console.log(listMiniTags);
  //console.log(finalResultTotalMiniTags);
  const inputResearch = document.getElementById("search");
  let researchToLowerCase = inputResearch.value.toLowerCase();
  const removeMiniTag = document.querySelectorAll(".tag-button");
  //console.log(removeMiniTag.length);
  //console.log(finalResultTotalMiniTags);
  //filters input /minitag
  if (finalResultTotalMiniTags.length === 0 && researchToLowerCase.length > 2) {
    //console.log("removeMiniTag.length === 0 && researchToLowerCase.length");
    results = recipes.filter((obj) => {
      return (
        obj.name.toLowerCase().includes(researchToLowerCase) ||
        obj.description.toLowerCase().includes(researchToLowerCase) ||
        obj.ingredients.find((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
        )
      );
    });
    populateTags(results);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(results);
    removeElementsFromListItems();
    resetAllArrays();
  }
  if (finalResultTotalMiniTags.length > 0 && researchToLowerCase.length > 2) {
    //console.log("removeMiniTag.length > 0 && researchToLowerCase.length");
    //console.log(researchToLowerCase.length);
    //console.log(...results);
    results = recipes.filter((obj) => {
      return (
        obj.name.toLowerCase().includes(researchToLowerCase) ||
        obj.description.toLowerCase().includes(researchToLowerCase) ||
        obj.ingredients.find((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
        )
      );
    });
    //console.log(results);

    //console.log(finalResultTotalMiniTags);

    finalResultTotalMiniTags.forEach((item) => {
      results = results.filter((obj) => {
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

      populateTags(results);
      filterListTagsbyInputTag();
      createMiniTags();
      createCardRecipesMiniTags(results);
      removeElementsFromListItems();
      resetAllArrays();
    });
  }

  if (
    finalResultTotalMiniTags.length === 0 &&
    researchToLowerCase.length === 0
  ) {
    //console.log("removeMiniTag.length === 0");
    results = recipes;

    populateTags(results);
    filterListTagsbyInputTag();
    createMiniTags();
    createCardRecipesMiniTags(results);
    resetAllArrays();
    //console.log(results);
  }

  if (finalResultTotalMiniTags.length > 0 && researchToLowerCase.length === 0) {
    UpdateItemsFromMiniTags();
  }
}

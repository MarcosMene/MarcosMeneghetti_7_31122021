let resultRecipesMiniTags = [];
let recipesWithRepetition = [];
let totalRecipesMiniTags = [];
let resultRecipesMultipleMiniTags = [];
let uniqueValues = [];
let FinalResultTotalMiniTags = [];
let resultsRecipes = [];
let totalMiniTags = [];
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

  //remove repeated element from de list minitags
  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }
  //remove repeated element from totalMiniTags
  totalMiniTags = getUniqueListBy(totalMiniTags, "datavalue");
  FinalResultTotalMiniTags.push(...totalMiniTags);
  console.log(uniqueValues);
  console.log(totalMiniTags);
  console.log(FinalResultTotalMiniTags);

  console.log(listMiniTags);
  let valueLowCase = value.toLowerCase();
  switch (dataValue) {
    case "ingredients":
      resultRecipesMiniTags = recipes.filter((obj) =>
        obj.ingredients.find(
          (ingredient) => ingredient.ingredient.toLowerCase() === valueLowCase
        )
      );
      recipesWithRepetition.push(...resultRecipesMiniTags);

      console.log(recipesWithRepetition);
      console.log(resultRecipesMiniTags);
      UpdateItemsFromMiniTags();
      break;

    case "appliance":
      resultRecipesMiniTags = recipes.filter(
        (obj) => obj.appliance.toLowerCase() === valueLowCase
      );
      recipesWithRepetition.push(...resultRecipesMiniTags);

      console.log(recipesWithRepetition);
      UpdateItemsFromMiniTags();
      break;

    case "ustensils":
      resultRecipesMiniTags = recipes.filter((obj) =>
        obj.ustensils.find(
          (ustensil) => ustensil.toLowerCase() === valueLowCase
        )
      );
      recipesWithRepetition.push(...resultRecipesMiniTags);

      console.log(recipesWithRepetition);
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
  //remove repeated recipes from the list of minitags
  totalRecipesMiniTags = [...new Set(recipesWithRepetition)];
  console.log(totalRecipesMiniTags);
  console.log("----------");
  console.log(FinalResultTotalMiniTags);
  console.log("----------");
  FinalResultTotalMiniTags.forEach((item) => {
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
  console.log(totalRecipesMiniTags);
}

function removeMiniTag() {
  let removeMiniTag = document.querySelectorAll(".tag-button");
  removeMiniTag.forEach((item) => {
    item.addEventListener("click", () => {
      dataValueTag = item.getAttribute("datavalue", item);
      valueTag = item.innerText.toLowerCase();
      //remove space at beginning and end
      valueTag = valueTag.trim();
      //remove minitag value from list of minitag list
      FinalResultTotalMiniTags = FinalResultTotalMiniTags.filter(
        (item) => item.value !== valueTag
      );
      console.log("-------------");
      console.log(FinalResultTotalMiniTags);
      item.remove();
      removeMiniTag = document.querySelectorAll(".tag-button");
      if (removeMiniTag.length > 0) {
        console.log(totalRecipesMiniTags);
        console.log(resultRecipesMiniTags);

        recipesWithRepetition = [...new Set(recipesWithRepetition)];

        //remove repeated recipes from the list of minitags
        totalRecipesMiniTags = [...new Set(recipesWithRepetition)];
        console.log(totalRecipesMiniTags);
        console.log("----------");
        console.log(FinalResultTotalMiniTags);
        console.log("----------");
        FinalResultTotalMiniTags.forEach((item) => {
          recipesWithRepetition = recipesWithRepetition.filter((obj) => {
            switch (item.datavalue) {
              case "ingredients":
                return obj.ingredients.find(
                  (ingredient) =>
                    ingredient.ingredient.toLowerCase() === item.value
                );
              case "appliance":
                return obj.appliance.toLowerCase() === item.value;
              case "ustensils":
                return obj.ustensils.find(
                  (ustensil) => ustensil.toLowerCase() === item.value
                );
            }
          });

          populateTags(recipesWithRepetition);
          filterListTagsbyInputTag();
          createMiniTags();
          createCardRecipesMiniTags(recipesWithRepetition);
          removeElementsFromListItems();
        });
        console.log(totalRecipesMiniTags);
        console.log(totalRecipesMiniTags);
      } else {
        resultsRecipes = recipes.filter((obj) => {
          switch (dataValueTag) {
            case "ingredients":
              return obj.ingredients.find((ingredient) =>
                ingredient.ingredient.toLowerCase()
              );
            case "appliance":
              return obj.appliance.toLowerCase();
            case "ustensils":
              return obj.ustensils.find((ustensil) => ustensil.toLowerCase());
          }
        });
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
        FinalResultTotalMiniTags = [];
        resultsRecipes = [];
        listMiniTags = [];
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
    });
  });
}

const inputResearch = document.getElementById("search");

function globalSearchInput(value) {
  value.addEventListener("input", (e) => {
    researchToLowerCase = inputResearch.value.toLowerCase();

    //
    // filter inputs and minitags
    //
    if (e.target.value.length > 2 && finalResultTotalMiniTags.length === 0) {
      results = recipes.filter((obj) => {
        return (
          obj.name.toLowerCase().includes(researchToLowerCase) ||
          obj.description.toLowerCase().includes(researchToLowerCase) ||
          obj.ingredients.find((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
          )
        );
      });
      createCardRecipesInput(results);
      populateTags(results);
      filterListTagsbyInputTag();
      createMiniTags();
    } else if (
      e.target.value.length > 2 &&
      finalResultTotalMiniTags.length > 0
    ) {
      results = recipes.filter((obj) => {
        return (
          obj.name.toLowerCase().includes(researchToLowerCase) ||
          obj.description.toLowerCase().includes(researchToLowerCase) ||
          obj.ingredients.find((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
          )
        );
      });

      finalResultTotalMiniTags.forEach((item) => {
        results = results.filter((obj) => {
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

        populateTags(results);
        filterListTagsbyInputTag();
        createMiniTags();
        createCardRecipesMiniTags(results);
        removeElementsFromListItems();
      });
    } else if (
      e.target.value.length === 0 &&
      finalResultTotalMiniTags.length > 0
    ) {
      results = recipes.filter((obj) => {
        return (
          obj.name.toLowerCase().includes(researchToLowerCase) ||
          obj.description.toLowerCase().includes(researchToLowerCase) ||
          obj.ingredients.find((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(researchToLowerCase)
          )
        );
      });

      finalResultTotalMiniTags.forEach((item) => {
        results = results.filter((obj) => {
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

        populateTags(results);
        filterListTagsbyInputTag();
        createMiniTags();
        createCardRecipesMiniTags(results);
        removeElementsFromListItems();
      });
    } else if (
      e.target.value.length === 0 &&
      finalResultTotalMiniTags.length === 0
    ) {
      results = recipes;
      populateTags(results);
      filterListTagsbyInputTag();
      createMiniTags();
      createCardRecipesMiniTags(results);
      resetAllArrays();
    }
    //all cards appears if input value <3
    else if (
      e.target.value.length < 3 &&
      finalResultTotalMiniTags.length === 0
    ) {
      const cardRecipe = document.querySelectorAll(".card-recipe");
      if (cardRecipe.length) {
        cardRecipe.forEach((element) => {
          element.remove();
        });
      }

      // call function create all card recipes for input <2
      createCardRecipesInput(recipes);

      // remove all items from the lists
      const listAllItems = document.querySelectorAll(".search-item");
      listAllItems.forEach((item) => {
        item.remove();
      });
      CreateListElements();
      filterListTagsbyInputTag();
      createMiniTags();
    }
  });
}

function createCardRecipesInput(results) {
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
// update ingredients-appareil-ustensils
function populateTags(results) {
  // get ingredients from results recipes
  let ingredientsResult = [];
  let reducedIngredient = [];
  results.forEach((recipe) => {
    if (recipe.ingredients.length) {
      const ingredientsMapResult = recipe.ingredients.map((ingr) =>
        ingr.ingredient.toLowerCase()
      );
      ingredientsResult.push(...ingredientsMapResult);
      reducedIngredient = [...new Set(ingredientsResult)]; //remove duplicates
    }
  });

  // remove all items from the lists
  const listAllItems = document.querySelectorAll(".search-item");
  listAllItems.forEach((item) => {
    item.remove();
  });

  // remove ingredients from de tag ingredient
  reducedIngredient.forEach((element) => {
    const searchlistIngredients = document.querySelector(
      ".search-list-ingredients"
    );
    const domIngredients = listsDOM(element, "ingredients");
    searchlistIngredients.append(domIngredients);
  });

  // get appliances from results recipes
  let appliancesResult = [];
  let reducedAppliance = [];
  results.forEach((recipe) => {
    if (recipe.appliance.length) {
      const appliancesMapResult = recipe.appliance.toLowerCase();

      appliancesResult.push(appliancesMapResult);
      reducedAppliance = [...new Set(appliancesResult)]; //remove duplicates
    }
  });

  // remove appliances from de tag appliance
  reducedAppliance.forEach((element) => {
    const searchListappliances = document.querySelector(
      ".search-list-appliances"
    );
    const domAppliance = listsDOM(element, "appliances");
    searchListappliances.append(domAppliance);
  });

  // get ustensils from results recipes
  let ustensilsResult = [];
  let reducedUstensils = [];
  results.forEach((recipe) => {
    if (recipe.ustensils.length) {
      recipe.ustensils.forEach((item) => {
        ustensilsResult.push(item.toLowerCase());
        reducedUstensils = [...new Set(ustensilsResult)]; //remove duplicates
      });
    }
  });
  // remove ustensils from de tag appliance
  reducedUstensils.forEach((element) => {
    const searchListUstensils = document.querySelector(
      ".search-list-ustensils"
    );
    const domUstensils = listsDOM(element, "ustensils");
    searchListUstensils.append(domUstensils);
  });
}

globalSearchInput(inputResearch);

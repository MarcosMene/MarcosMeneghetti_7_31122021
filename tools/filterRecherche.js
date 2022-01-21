function globalSearchInput(value) {
  value.addEventListener("input", (e) => {
    const inputResearch = document.getElementById("search");
    let researchToLowerCase = inputResearch.value.toLowerCase();

    //all cards appears if input value <3
    if (e.target.value.length < 3) {
      const cardRecipe = document.querySelectorAll(".card-recipe");
      if (cardRecipe.length) {
        for (i = 0; i < cardRecipe.length; i++) {
          cardRecipe[i].remove();
        }
      }
      // call function create all card recipes for input <2
      createCardRecipesInput(recipes);

      // remove all items from the lists
      const listAllItems = document.querySelectorAll(".search-item");
      for (i = 0; i < listAllItems.length; i++) {
        listAllItems[i].remove();
      }
      CreateListElements();
    }
    //return values if input value > 2
    if (e.target.value.length > 2) {
      let results = recipes.filter((obj) => {
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
    }
  });

  function createCardRecipesInput(results) {
    // show/hide message no recipes
    const MessageNoRecette = document.querySelector(".message-no-recette");
    if (results.length === 0) {
      MessageNoRecette.classList.remove("hide");
    } else {
      MessageNoRecette.classList.add("hide");
    }

    // delete all cards
    const cardRecipe = document.querySelectorAll(".card-recipe");
    for (i = 0; i < cardRecipe.length; i++) {
      cardRecipe[i].remove();
    }

    // create new cards
    const rowCardsRecipes = document.querySelector(".cards-recipes");
    results.forEach((recipe) => {
      const cardRecipeModel = cardsFactory(recipe);
      const recipeCardDOM = cardRecipeModel.cardsRecipesDOM();
      rowCardsRecipes.appendChild(recipeCardDOM);
    });
  }
}

// update ingredients-appareil-ustensils
function populateTags(results) {
  // get ingredients from results recipes
  let ingredientsResult = [];
  results.forEach((recipe) => {
    if (recipe.ingredients.length) {
      const ingredientsMapResult = recipe.ingredients.map((ingr) =>
        ingr.ingredient.toLowerCase()
      );
      ingredientsResult.push(...ingredientsMapResult);
    }
  });

  // remove all items from the lists
  const listAllItems = document.querySelectorAll(".search-item");
  for (i = 0; i < listAllItems.length; i++) {
    listAllItems[i].remove();
  }

  // remove ingredients from de tag ingredient

  ingredientsResult.forEach((element) => {
    const searchlistIngredients = document.querySelector(
      ".search-list-ingredients"
    );
    const domIngredients = listsDOM(element, "ingredients");
    searchlistIngredients.append(domIngredients);
  });

  // get appliances from results recipes
  let appliancesResult = [];
  results.forEach((recipe) => {
    if (recipe.appliance.length) {
      appliancesResult.push(recipe.appliance);
    }
  });

  // remove appliances from de tag appliance
  appliancesResult.forEach((element) => {
    const searchListappliances = document.querySelector(
      ".search-list-appliances"
    );
    const domAppliance = listsDOM(element, "appliances");
    searchListappliances.append(domAppliance);
  });

  // get ustensils from results recipes
  let ustensilsResult = [];
  results.forEach((recipe) => {
    if (recipe.ustensils.length) {
      for (u = 0; u < recipe.ustensils.length; u++) {
        ustensilsResult.push(recipe.ustensils[u]);
      }
    }
  });
  // remove ustensils from de tag appliance
  ustensilsResult.forEach((element) => {
    const searchListUstensils = document.querySelector(
      ".search-list-ustensils"
    );
    const domUstensils = listsDOM(element, "ustensils");
    searchListUstensils.append(domUstensils);
  });
}

const inputResearch = document.getElementById("search");
globalSearchInput(inputResearch);

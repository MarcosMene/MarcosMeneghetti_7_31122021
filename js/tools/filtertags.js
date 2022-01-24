/*filter
 list 
 tags */
function filterListTags() {
  function filterListTagsbyInputTag() {
    // const listItemsComplete = document.querySelectorAll(".search-item");

    //  html elements ingredients
    const inputIngredients = document.getElementById("ingredients");
    const listItemIngredients = document.querySelectorAll(
      ".search-item-ingredients"
    );

    //  html elements appliance
    const inputappliances = document.getElementById("appliances");
    const listItemAppliances = document.querySelectorAll(
      ".search-item-appliances"
    );

    //  html elements ustensils
    const inputUstensils = document.getElementById("ustensils");
    const listItemUstensils = document.querySelectorAll(
      ".search-item-ustensils"
    );

    //  ATTACH KEY UP LISTENER TO SEARCH BOX
    inputIngredients.onkeyup = () => {
      // GET CURRENT SEARCH TERM
      let searchIngredientsList = inputIngredients.value.toLowerCase();

      // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
      for (let i of listItemIngredients) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(searchIngredientsList) == -1) {
          i.style.display = "none";
        } else {
          i.style.display = "";
        }
      }
    };

    //  ATTACH KEY UP LISTENER TO SEARCH BOX
    inputappliances.onkeyup = () => {
      // GET CURRENT SEARCH TERM
      let searchinputappliancesList = inputappliances.value.toLowerCase();

      // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
      for (let i of listItemAppliances) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(searchinputappliancesList) == -1) {
          i.style.display = "none";
        } else {
          i.style.display = "";
        }
      }
    };

    //  ATTACH KEY UP LISTENER TO SEARCH BOX
    inputUstensils.onkeyup = () => {
      // GET CURRENT SEARCH TERM
      let searchinputUstensilsList = inputUstensils.value.toLowerCase();

      // LOOP THROUGH LIST ITEMS - ONLY SHOW THOSE THAT MATCH SEARCH
      for (let i of listItemUstensils) {
        let item = i.innerHTML.toLowerCase();
        if (item.indexOf(searchinputUstensilsList) == -1) {
          i.style.display = "none";
        } else {
          i.style.display = "";
        }
      }
    };
  }

  filterListTagsbyInputTag();

  const researchAppliance = [];
  const researchIngredient = [];
  const researchustensils = [];
  const researchName = [];

  let ingredientFinal = [];
  let applianceFinal = [];
  let ustensilsFinal = [];
  let results = [];
  let inputValue = [];
  let temp = [];
  let tempFinal = [];

  // remove elements from list

  // onclick remove elements from de list ingredients

  createMiniTagWithItemList();

  // console.log(recipes)

  function clickItems() {
    const listItemIngredients = document.querySelectorAll(
      ".search-item-ingredients"
    );
    for (let i of listItemIngredients) {
      i.addEventListener("click", () => {
        inputValue.push(i.innerText); //get value list for the tag
        createList(inputValue); //call function to filter by list names
        console.log(i.innerText);
        console.log(inputValue);

        ingredientFinal.forEach((element) => {
          for (i = 0; i < listItemIngredients.length; i++) {
            listItemIngredients[i].remove();
          }

          const searchlistIngredients = document.querySelector(
            ".search-list-ingredients"
          );
          const domIngredients = listsDOM(element, "ingredients");
          searchlistIngredients.append(domIngredients);

          // Appliances
          const listappliancesLi = document.querySelectorAll(
            ".search-item-appliances"
          );
          for (i = 0; i < listappliancesLi.length; i++) {
            listappliancesLi[i].remove();
          }

          applianceFinal.forEach((element) => {
            const searchlistAppliance = document.querySelector(
              ".search-list-appliances"
            );
            const domAppliance = listsDOM(element, "appliances");
            searchlistAppliance.append(domAppliance);
          });

          // Ustensils
          const listItemUstensils = document.querySelectorAll(
            ".search-item-ustensils"
          );
          for (i = 0; i < listItemUstensils.length; i++) {
            listItemUstensils[i].remove();
          }

          ustensilsFinal.forEach((element) => {
            const searchListUstensils = document.querySelector(
              ".search-list-ustensils"
            );
            const domUstensils = listsDOM(element, "ustensils");
            searchListUstensils.append(domUstensils);
          });
        });
        createMiniTagWithItemList();

        console.log(inputValue);
        console.log(ingredientFinal);
        console.log(applianceFinal);
        console.log(ustensilsFinal);
        filterListTagsbyInputTag();
      });
    }
  }

  function createList(inputValue) {
    inputValue.forEach((value) => {
      if (inputValue.length) {
        results = recipes.filter((obj) => {
          return (
            obj.name.includes(value) ||
            obj.description.includes(value) ||
            obj.ingredients.find((ingredient) =>
              ingredient.ingredient.includes(value)
            ) ||
            obj.ustensils.includes(value) ||
            obj.appliance.includes(value)
          );
        });

        // for each recipe
        results.forEach((recipe) => {
          temp = [];
          ingredientFinal = [];
          if (recipe.name.length) {
            researchName.push(recipe.name);
          }

          // find ingredients
          if (recipe.ingredients.length) {
            results.forEach((recipe) => {
              recipe.ingredients.forEach((ingredient) => {
                researchIngredient.push(ingredient.ingredient);
                temp.push(ingredient.ingredient);
                tempFinal = [...new Set(temp)];
              });
            });
          }
          console.log(temp);
          console.log(tempFinal);

          // find appliance for ingredients
          if (recipe.appliance.length) {
            researchAppliance.push(recipe.appliance);
          }

          // find ustensils for ingredients
          if (recipe.ustensils.length) {
            for (u = 0; u < recipe.ustensils.length; u++) {
              researchustensils.push(recipe.ustensils[u]);
            }
          }
        });

        console.log(ingredientFinal);
        console.log(researchustensils);

        const itemsWitoutInputValue = tempFinal.filter(
          (x) => inputValue.indexOf(x) === -1
        );
        console.log(itemsWitoutInputValue);

        ingredientFinal = [...itemsWitoutInputValue];
        console.log(ingredientFinal);

        // APPLIANCES

        applianceFinal = [...new Set(researchAppliance)];

        for (let i = 0; i < applianceFinal.length; i++) {
          for (let j = 0; j < inputValue.length; j++) {
            if (applianceFinal[i] === inputValue[j]) {
              applianceFinal.splice(i, 1);
            }
          }
        }

        ustensilsFinal = [...new Set(researchustensils)];
        console.log(ustensilsFinal);

        for (let i = 0; i < ustensilsFinal.length; i++) {
          for (let j = 0; j < inputValue.length; j++)
            if (ustensilsFinal[i] === inputValue[j]) {
              ustensilsFinal.splice(i, 1);
            }
        }
        console.log(ustensilsFinal);
      }
    });
  }

  function createMiniTagWithItemList() {
    clickItems();
    createMiniTags();
  }
}
filterListTags();

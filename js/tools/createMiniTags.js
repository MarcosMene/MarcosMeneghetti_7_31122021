//******** */
// Create
// minitags
//******** */
let listMiniTags = [];

function createMiniTags() {
  // ingredients
  const listItemIngredients = document.querySelectorAll(
    ".search-item-ingredients"
  );

  const miniTags = document.querySelector("#mini-tags");
  for (let i = 0; i < listItemIngredients.length; i++) {
    listItemIngredients[i].addEventListener("click", (e) => {
      listMiniTags.push(listItemIngredients[i]);

      const miniTagsChild = minitagsDOM(
        listItemIngredients[i].innerText.toLowerCase(),
        "primary",
        "ingredients"
      );
      miniTags.appendChild(miniTagsChild);
      searchByMiniTags("ingredients", listItemIngredients[i].innerText);

      // remove minitag on click
      removeMiniTag();
    });
  }

  // Appareil
  const listItemAppliances = document.querySelectorAll(
    ".search-item-appliances"
  );

  //   let listTagAppliances = [];
  for (let i = 0; i < listItemAppliances.length; i++) {
    listItemAppliances[i].addEventListener("click", (e) => {
      listItemAppliances[i].remove(); //remove element list

      listMiniTags.push(listItemAppliances[i]);

      const miniTagsChild = minitagsDOM(
        listItemAppliances[i].innerText.toLowerCase(),
        "success",
        "appliances"
      );
      miniTags.appendChild(miniTagsChild);
      searchByMiniTags("appliance", listItemAppliances[i].innerText);

      // remove minitag on click
      removeMiniTag();
    });
  }
  // Ustensils
  const listItemUstensils = document.querySelectorAll(".search-item-ustensils");

  // let listTagUstensils = [];
  for (let i = 0; i < listItemUstensils.length; i++) {
    listItemUstensils[i].addEventListener("click", (e) => {
      listItemUstensils[i].remove(); //remove element list

      listMiniTags.push(listItemUstensils[i]);

      const miniTagsChild = minitagsDOM(
        listItemUstensils[i].innerText.toLowerCase(),
        "danger",
        "ustensils"
      );
      miniTags.appendChild(miniTagsChild);
      console.log(miniTags);
      searchByMiniTags(
        "ustensils",
        listItemUstensils[i].innerText.toLowerCase()
      );

      removeMiniTag();
    });
  }
  //recover all elements from miniTags
  let totalMiniTags = [];
  for (i = 0; i < listMiniTags.length; i++) {
    totalMiniTags.push(listMiniTags[i].innerText.toLowerCase());
  }
  console.log(totalMiniTags);
}

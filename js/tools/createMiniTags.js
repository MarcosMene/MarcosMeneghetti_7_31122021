//******** */
// Create
// minitags
//******** */
let listMiniTags = [];
let totalMiniTags = [];
function createMiniTags() {
  /*
 *****
Ingredients
 ****
 */

  const miniTags = document.querySelector("#mini-tags");

  const listItemIngredients = document.querySelectorAll(
    ".search-item-ingredients"
  );

  for (let i = 0; i < listItemIngredients.length; i++) {
    listItemIngredients[i].addEventListener("click", (e) => {
      // listItemIngredients[i].remove();
      listMiniTags.push(listItemIngredients[i]);

      const miniTagsChild = minitagsDOM(
        listItemIngredients[i].innerText.toLowerCase(),
        "primary",
        "ingredients"
      );

      miniTags.appendChild(miniTagsChild);
      searchByMiniTags(
        "ingredients",
        listItemIngredients[i].innerText.toLowerCase()
      );

      // remove minitag on click
      removeMiniTag();
      // updateMiniTags();
    });
  }

  /*
 *****
 Appliances
 ****
 */
  const listItemAppliances = document.querySelectorAll(
    ".search-item-appliances"
  );

  for (let i = 0; i < listItemAppliances.length; i++) {
    listItemAppliances[i].addEventListener("click", (e) => {
      // listItemAppliances[i].remove(); //remove element list

      listMiniTags.push(listItemAppliances[i]);

      const miniTagsChild = minitagsDOM(
        listItemAppliances[i].innerText.toLowerCase(),
        "success",
        "appliance"
      );

      miniTags.appendChild(miniTagsChild);
      searchByMiniTags(
        "appliance",
        listItemAppliances[i].innerText.toLowerCase()
      );

      // remove minitag on click
      removeMiniTag();
      // updateMiniTags();
    });
  }
  /*
 *****
Ustensils
 ****
 */
  const listItemUstensils = document.querySelectorAll(".search-item-ustensils");

  for (let i = 0; i < listItemUstensils.length; i++) {
    listItemUstensils[i].addEventListener("click", (e) => {
      // listItemUstensils[i].remove(); //remove element list

      listMiniTags.push(listItemUstensils[i]);
      console.log(listItemUstensils[i]);
      const miniTagsChild = minitagsDOM(
        listItemUstensils[i].innerText.toLowerCase(),
        "danger",
        "ustensils"
      );
      miniTags.appendChild(miniTagsChild);
      // console.log(miniTags);
      searchByMiniTags(
        "ustensils",
        listItemUstensils[i].innerText.toLowerCase()
      );
      // remove minitag on click
      removeMiniTag();
      // updateMiniTags();
    });
  }
  // //recover all elements from miniTags
  // for (i = 0; i < listMiniTags.length; i++) {
  //   totalMiniTags.push(listMiniTags[i].innerText.toLowerCase());
  // }
  // totalMiniTags = [...new Set(totalMiniTags)];
  // console.log(totalMiniTags);
}

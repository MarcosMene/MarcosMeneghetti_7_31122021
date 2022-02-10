//******** */
// Create
// minitags
//******** */

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
    listItemIngredients[i].addEventListener("click", () => {
      listMiniTags.push(listItemIngredients[i]);

      const miniTagsChild = minitagsDOM(
        listItemIngredients[i].innerText.toLowerCase(),
        "primary",
        "ingredients"
      );

      miniTagsChild.addEventListener("click", (u) => {
        removeMiniTag(u);
      });

      miniTags.appendChild(miniTagsChild);
      searchByMiniTags(
        "ingredients",
        listItemIngredients[i].innerText.toLowerCase()
      );
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
      listMiniTags.push(listItemAppliances[i]);

      const miniTagsChild = minitagsDOM(
        listItemAppliances[i].innerText.toLowerCase(),
        "success",
        "appliance"
      );

      miniTagsChild.addEventListener("click", (u) => {
        removeMiniTag(u);
      });

      miniTags.appendChild(miniTagsChild);
      searchByMiniTags(
        "appliance",
        listItemAppliances[i].innerText.toLowerCase()
      );
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
      listMiniTags.push(listItemUstensils[i]);
      //console.log(listItemUstensils[i]);
      const miniTagsChild = minitagsDOM(
        listItemUstensils[i].innerText.toLowerCase(),
        "danger",
        "ustensils"
      );
      miniTagsChild.addEventListener("click", (u) => {
        removeMiniTag(u);
      });
      miniTags.appendChild(miniTagsChild);
      //console.log(miniTags);
      searchByMiniTags(
        "ustensils",
        listItemUstensils[i].innerText.toLowerCase()
      );
    });
  }
}

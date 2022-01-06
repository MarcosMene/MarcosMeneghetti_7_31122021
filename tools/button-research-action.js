// Ingredients
const searchIngredientsInput = document.querySelector("#ingredients");
const searchIngredientsLabelInput = document.querySelector(
  ".search-control-ingredients label"
);
const searchIngredientsExpand = document.querySelector(
  ".close-dropdown-ingredients"
);
const searchListBlockIngredients = document.querySelector(
  ".search-list-block-ingredients"
);
const searchIngredients = document.querySelector(".search-wrapper-ingredients");

// click input Ingredients
searchIngredientsInput.addEventListener("click", () => {
  searchIngredientsInput.classList.remove("hide");
  searchIngredientsLabelInput.classList.add("hide");
});

// input focus Ingredients
searchIngredientsInput.addEventListener("focus", () => {
  searchListBlockIngredients.classList.remove("hide");
  searchIngredientsExpand.classList.add("rotated");
});

// click arrow button Ingredients
searchIngredientsExpand.addEventListener("click", () => {
  searchListBlockIngredients.classList.remove("hide");
  searchIngredientsInput.classList.remove("hide");
  searchIngredientsLabelInput.classList.add("hide");
  searchIngredients.classList.toggle("w-50");
  searchIngredientsInput.classList.toggle("w-100");
  searchListBlockIngredients.classList.toggle("w-100");

  searchIngredientsExpand.classList.add("rotated");
  searchIngredientsInput.focus();
});

// click outside div button ingredients
document.addEventListener("click", (evt) => {
  let targetEl = evt.target; // clicked element
  do {
    if (targetEl == searchIngredients) {
      return;
    }
    // Go up the DOM ingredients
    targetEl = targetEl.parentNode;
  } while (targetEl);
  // click outside ingredients
  searchIngredientsInput.classList.add("hide");
  searchIngredientsInput.value = "";
  searchIngredientsLabelInput.classList.remove("hide");
  searchListBlockIngredients.classList.add("hide");
  searchIngredientsExpand.classList.remove("rotated");
  searchIngredients.classList.remove("w-50");
  searchIngredientsInput.classList.remove("w-100");
  searchListBlockIngredients.classList.remove("w-100");
});

// Appareil
const searchAppareilsInput = document.querySelector("#appareils");
const searchAppareilsLabelInput = document.querySelector(
  ".search-control-appareils label"
);
const searchAppareilsExpand = document.querySelector(
  ".close-dropdown-appareils"
);
const searchListBlockAppareils = document.querySelector(
  ".search-list-block-appareils"
);
const searchAppareils = document.querySelector(".search-wrapper-appareils");

// click input Appareil
searchAppareilsInput.addEventListener("click", () => {
  searchAppareilsInput.classList.remove("hide");
  searchAppareilsLabelInput.classList.add("hide");
});

// input focus Appareil
searchAppareilsInput.addEventListener("focus", () => {
  searchListBlockAppareils.classList.remove("hide");
  searchAppareilsExpand.classList.add("rotated");
});

// click arrow button Appareil
searchAppareilsExpand.addEventListener("click", () => {
  searchListBlockAppareils.classList.remove("hide");
  searchAppareilsInput.classList.remove("hide");
  searchAppareilsLabelInput.classList.add("hide");
  searchAppareils.classList.toggle("w-50");
  searchAppareilsInput.classList.toggle("w-100");
  searchListBlockAppareils.classList.toggle("w-100");

  searchAppareilsExpand.classList.add("rotated");
  searchAppareilsInput.focus();
});

// click outside div button Appareil
document.addEventListener("click", (evt) => {
  let targetEl = evt.target; // clicked element
  do {
    if (targetEl == searchAppareils) {
      return;
    }
    // Go up the DOM Appareil
    targetEl = targetEl.parentNode;
  } while (targetEl);
  // click outside Appareil
  searchAppareilsInput.classList.add("hide");
  searchAppareilsInput.value = "";
  searchAppareilsLabelInput.classList.remove("hide");
  searchListBlockAppareils.classList.add("hide");
  searchAppareilsExpand.classList.remove("rotated");
  searchAppareils.classList.remove("w-50");
  searchAppareilsInput.classList.remove("w-100");
  searchListBlockAppareils.classList.remove("w-100");
});

// Ustensiles
const searchUstensilesInput = document.querySelector("#ustensiles");
const searchUstensilesLabelInput = document.querySelector(
  ".search-control-ustensiles label"
);
const searchUstensilesExpand = document.querySelector(
  ".close-dropdown-ustensiles"
);
const searchListBlockUstensiles = document.querySelector(
  ".search-list-block-ustensiles"
);
const searchUstensiles = document.querySelector(".search-wrapper-ustensiles");

// click input Ustensiles
searchUstensilesInput.addEventListener("click", () => {
  searchUstensilesInput.classList.remove("hide");
  searchUstensilesLabelInput.classList.add("hide");
});

// input focus Ustensiles
searchUstensilesInput.addEventListener("focus", () => {
  searchListBlockUstensiles.classList.remove("hide");
  searchUstensilesExpand.classList.add("rotated");
});

// click arrow button Ustensiles
searchUstensilesExpand.addEventListener("click", () => {
  searchListBlockUstensiles.classList.remove("hide");
  searchUstensilesInput.classList.remove("hide");
  searchUstensilesLabelInput.classList.add("hide");
  searchUstensiles.classList.toggle("w-50");
  searchUstensilesInput.classList.toggle("w-100");
  searchListBlockUstensiles.classList.toggle("w-100");

  searchUstensilesExpand.classList.add("rotated");
  searchUstensilesInput.focus();
});

// click outside div button Ustensiles
document.addEventListener("click", (evt) => {
  let targetEl = evt.target; // clicked element
  do {
    if (targetEl == searchUstensiles) {
      return;
    }
    // Go up the DOM Ustensiles
    targetEl = targetEl.parentNode;
  } while (targetEl);
  // click outside Ustensiles
  searchUstensilesInput.classList.add("hide");
  searchUstensilesInput.value = "";
  searchUstensilesLabelInput.classList.remove("hide");
  searchListBlockUstensiles.classList.add("hide");
  searchUstensilesExpand.classList.remove("rotated");
  searchUstensiles.classList.remove("w-50");
  searchUstensilesInput.classList.remove("w-100");
  searchListBlockUstensiles.classList.remove("w-100");
});

// Ingredients
const searchIngredients = document.querySelector(".search-wrapper-ingredients");
const searchControlIngredients = document.querySelector(
  ".search-control-ingredients"
);
const searchIngredientsText = document.querySelector(".ingredients-text");
const searchIngredientsInput = document.querySelector("#ingredients");
const searchIngredientsExpand = document.querySelector(
  ".close-dropdown-ingredients"
);
const searchListBlockIngredients = document.querySelector(
  ".search-list-block-ingredients"
);
// click button
searchControlIngredients.addEventListener("click", () => {
  searchIngredientsInput.classList.toggle("hide");
  searchIngredientsText.classList.toggle("hide");
  searchListBlockIngredients.classList.toggle("hide");
  searchIngredientsInput.focus();
  searchIngredientsExpand.classList.toggle("rotated");
});

// click arrow button
searchIngredientsExpand.addEventListener("click", () => {
  searchIngredientsInput.classList.remove("hide");
  searchIngredientsText.classList.add("hide");
  searchListBlockIngredients.classList.remove("hide");
  searchIngredientsExpand.classList.add("rotated");
  searchIngredients.classList.toggle("w-50");
  searchIngredientsInput.classList.toggle("w-100");
  searchListBlockIngredients.classList.toggle("w-100");
  searchListBlockIngredients.classList.toggle("flex-expand");
  searchListBlockIngredients.classList.toggle("height-dropdown-list");
  searchIngredientsInput.focus();
});

// click input
searchIngredientsInput.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});

// Appareils
const searchAppareils = document.querySelector(".search-wrapper-appareils");
const searchControlAppareils = document.querySelector(
  ".search-control-appareils"
);
const searchAppareilsText = document.querySelector(".appareils-text");
const searchAppareilsInput = document.querySelector("#appareils");
const searchAppareilsExpand = document.querySelector(
  ".close-dropdown-appareils"
);
const searchListBlockAppareils = document.querySelector(
  ".search-list-block-appareils"
);
// click button
searchControlAppareils.addEventListener("click", () => {
  searchAppareilsInput.classList.toggle("hide");
  searchAppareilsText.classList.toggle("hide");
  searchListBlockAppareils.classList.toggle("hide");
  searchAppareilsInput.focus();
  searchAppareilsExpand.classList.toggle("rotated");
});

// click arrow button
searchAppareilsExpand.addEventListener("click", () => {
  searchAppareilsInput.classList.remove("hide");
  searchAppareilsText.classList.add("hide");
  searchListBlockAppareils.classList.remove("hide");
  searchAppareilsExpand.classList.add("rotated");
  searchAppareils.classList.toggle("w-50");
  searchAppareilsInput.classList.toggle("w-100");
  searchListBlockAppareils.classList.toggle("w-100");
  searchListBlockAppareils.classList.toggle("flex-expand");
  searchListBlockAppareils.classList.toggle("height-dropdown-list");
  searchAppareilsInput.focus();
});

// click input
searchAppareilsInput.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});

// Ustensiles
const searchUstensiles = document.querySelector(".search-wrapper-ustensiles");
const searchControlUstensiles = document.querySelector(
  ".search-control-ustensiles"
);
const searchUstensilesText = document.querySelector(".ustensiles-text");
const searchUstensilesInput = document.querySelector("#ustensiles");
const searchUstensilesExpand = document.querySelector(
  ".close-dropdown-ustensiles"
);
const searchListBlockUstensiles = document.querySelector(
  ".search-list-block-ustensiles"
);
// click button
searchControlUstensiles.addEventListener("click", () => {
  searchUstensilesInput.classList.toggle("hide");
  searchUstensilesText.classList.toggle("hide");
  searchListBlockUstensiles.classList.toggle("hide");
  searchUstensilesInput.focus();
  searchUstensilesExpand.classList.toggle("rotated");
});

// click arrow button
searchUstensilesExpand.addEventListener("click", () => {
  searchUstensilesInput.classList.remove("hide");
  searchUstensilesText.classList.add("hide");
  searchListBlockUstensiles.classList.remove("hide");
  searchUstensilesExpand.classList.add("rotated");
  searchUstensiles.classList.toggle("w-50");
  searchUstensilesInput.classList.toggle("w-100");
  searchListBlockUstensiles.classList.toggle("w-100");
  searchListBlockUstensiles.classList.toggle("flex-expand");
  searchListBlockUstensiles.classList.toggle("height-dropdown-list");
  searchUstensilesInput.focus();
});

// click input
searchUstensilesInput.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
});

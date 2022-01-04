// Ingredients

const searchIngredients = document.querySelector(".search-wrapper-ingredients");
const searchIngredientsText = document.querySelector(".ingredients-text");
const searchIngredientsInput = document.querySelector("#ingredients");
const searchIngredientsExpand = document.querySelector(
  ".close-dropdown-ingredients"
);
const searchIngredientsList = document.querySelector(
  ".search-list-ingredients"
);
const searchListBlockIngredients = document.querySelector(
  ".search-list-block-ingredients"
);

searchIngredients.addEventListener("click", () => {
  searchIngredientsInput.classList.toggle("hide");
  searchIngredientsText.classList.toggle("hide");
  searchListBlockIngredients.classList.toggle("hide");
  searchIngredientsInput.focus();
  searchIngredientsExpand.classList.toggle("rotated");
});

searchIngredientsExpand.addEventListener("click", () => {
  searchIngredientsInput.setAttribute("size", "70");
});

// Appareil
const searchAppareils = document.querySelector(".search-wrapper-appareils");
const searchAppareilsText = document.querySelector(".appareils-text");
const searchAppareilsInput = document.querySelector("#appareils");
const searchAppareilsExpand = document.querySelector(
  ".close-dropdown-appareils"
);
const searchAppareilsList = document.querySelector(".search-list-appareils");
const searchListBlockAppareils = document.querySelector(
  ".search-list-block-appareils"
);

searchAppareils.addEventListener("click", () => {
  searchAppareilsInput.classList.toggle("hide");
  searchAppareilsText.classList.toggle("hide");
  searchListBlockAppareils.classList.toggle("hide");
  searchAppareilsInput.focus();
  searchAppareilsExpand.classList.toggle("rotated");
});

searchAppareilsExpand.addEventListener("click", () => {
  searchAppareilsInput.setAttribute("size", "70");
});

// Ustensiles
const searchUstensiles = document.querySelector(".search-wrapper-ustensiles");
const searchUstensilesText = document.querySelector(".ustensiles-text");
const searchUstensilesInput = document.querySelector("#ustensiles");
const searchUstensilesExpand = document.querySelector(
  ".close-dropdown-ustensiles"
);
const searchUstensilesList = document.querySelector(".search-list-ustensiles");
const searchListBlockUstensiles = document.querySelector(
  ".search-list-block-ustensiles"
);

searchUstensiles.addEventListener("click", () => {
  searchUstensilesInput.classList.toggle("hide");
  searchUstensilesText.classList.toggle("hide");
  searchListBlockUstensiles.classList.toggle("hide");
  searchUstensilesInput.focus();
  searchUstensilesExpand.classList.toggle("rotated");
});

searchUstensilesExpand.addEventListener("click", () => {
  searchUstensilesInput.setAttribute("size", "70");
});

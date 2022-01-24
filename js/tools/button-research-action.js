// Ingredients DOM
const searchIngredients = document.querySelector(".search-wrapper-ingredients");
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

const searchListIngredients = document.querySelector(
  ".search-list-ingredients"
);

searchListIngredients.classList.remove("expand-search-list");

// click input Ingredients
searchIngredientsInput.addEventListener("click", () => {
  searchIngredientsInput.value = "";
  searchIngredientsInput.classList.remove("hide");
  searchIngredientsLabelInput.classList.add("hide");
  searchIngredients.style.width = "20%";
  searchIngredientsInput.style.width = "100%";
  searchListBlockIngredients.style.width = "100%";
  searchIngredientsInput.focus();
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
  searchListIngredients.classList.toggle("expand-search-list");
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
  searchIngredients.style.width = "185px";
  searchIngredientsInput.classList.remove("w-100");
  searchListBlockIngredients.classList.remove("w-100");
  searchListIngredients.classList.remove("expand-search-list");

  // verify if list ingredients contains display none
  const searchListIngredientsLi = document.querySelectorAll(
    ".search-list-ingredients li"
  );
  // replace display none to display block for list ingredients
  searchListIngredientsLi.forEach((list) => {
    if (list.style.display === "none") {
      list.style.display = "block";
    }
  });
});

// Appareil DOM
const searchappliancesInput = document.querySelector("#appliances");
const searchappliancesLabelInput = document.querySelector(
  ".search-control-appliances label"
);
const searchappliancesExpand = document.querySelector(
  ".close-dropdown-appliances"
);
const searchListBlockappliances = document.querySelector(
  ".search-list-block-appliances"
);
const searchappliances = document.querySelector(".search-wrapper-appliances");
const searchListappliances = document.querySelector(".search-list-appliances");
searchListappliances.classList.remove("expand-search-list");

// click input Appareil
searchappliancesInput.addEventListener("click", () => {
  searchappliancesInput.value = "";
  searchappliancesInput.classList.remove("hide");
  searchappliancesLabelInput.classList.add("hide");
  searchappliances.style.width = "20%";
  searchappliancesInput.style.width = "100%";
  searchListBlockappliances.style.width = "100%";
  searchappliancesInput.focus();
});

// input focus Appareil
searchappliancesInput.addEventListener("focus", () => {
  searchListBlockappliances.classList.remove("hide");
  searchappliancesExpand.classList.add("rotated");
});

// click arrow button Appareil
searchappliancesExpand.addEventListener("click", () => {
  searchListBlockappliances.classList.remove("hide");
  searchappliancesInput.classList.remove("hide");
  searchappliancesLabelInput.classList.add("hide");
  searchappliances.classList.toggle("w-50");
  searchappliancesInput.classList.toggle("w-100");
  searchListBlockappliances.classList.toggle("w-100");
  searchListappliances.classList.toggle("expand-search-list");
  searchappliancesExpand.classList.add("rotated");
  searchappliancesInput.focus();
});

// click outside div button Appareil
document.addEventListener("click", (evt) => {
  let targetEl = evt.target; // clicked element
  do {
    if (targetEl == searchappliances) {
      return;
    }
    // Go up the DOM Appareil
    targetEl = targetEl.parentNode;
  } while (targetEl);
  // click outside Appareil
  searchappliancesInput.classList.add("hide");
  searchappliancesInput.value = "";
  searchappliancesLabelInput.classList.remove("hide");
  searchListBlockappliances.classList.add("hide");
  searchappliancesExpand.classList.remove("rotated");
  searchappliances.classList.remove("w-50");
  searchappliances.style.width = "185px";
  searchappliancesInput.classList.remove("w-100");
  searchListBlockappliances.classList.remove("w-100");
  searchListappliances.classList.remove("expand-search-list");

  // verify if list appliances contains display none
  const searchListappliancesLi = document.querySelectorAll(
    ".search-list-appliances li"
  );
  // replace display none to display block for list appliances
  searchListappliancesLi.forEach((list) => {
    if (list.style.display === "none") {
      list.style.display = "block";
    }
  });
});

// Ustensils DOM
const searchUstensilsInput = document.querySelector("#ustensils");
const searchUstensilsLabelInput = document.querySelector(
  ".search-control-ustensils label"
);
const searchUstensilsExpand = document.querySelector(
  ".close-dropdown-ustensils"
);
const searchListBlockUstensils = document.querySelector(
  ".search-list-block-ustensils"
);
const searchUstensils = document.querySelector(".search-wrapper-ustensils");
const searchListUstensils = document.querySelector(".search-list-ustensils");
searchListUstensils.classList.remove("expand-search-list");

// click input Ustensils
searchUstensilsInput.addEventListener("click", () => {
  searchUstensilsInput.value = "";
  searchUstensilsInput.classList.remove("hide");
  searchUstensilsLabelInput.classList.add("hide");
  searchUstensils.style.width = "20%";
  searchUstensilsInput.style.width = "100%";
  searchListBlockUstensils.style.width = "100%";
  searchUstensilsInput.focus();
});

// input focus Ustensils
searchUstensilsInput.addEventListener("focus", () => {
  searchListBlockUstensils.classList.remove("hide");
  searchUstensilsExpand.classList.add("rotated");
});

// click arrow button Ustensils
searchUstensilsExpand.addEventListener("click", () => {
  searchListBlockUstensils.classList.remove("hide");
  searchUstensilsInput.classList.remove("hide");
  searchUstensilsLabelInput.classList.add("hide");
  searchUstensils.classList.toggle("w-50");

  searchUstensilsInput.classList.toggle("w-100");
  searchListBlockUstensils.classList.toggle("w-100");
  searchListUstensils.classList.toggle("expand-search-list");
  searchUstensilsExpand.classList.add("rotated");
  searchUstensilsInput.focus();
});

// click outside div button Ustensils
document.addEventListener("click", (evt) => {
  let targetEl = evt.target; // clicked element
  do {
    if (targetEl == searchUstensils) {
      return;
    }
    // Go up the DOM Ustensils
    targetEl = targetEl.parentNode;
  } while (targetEl);
  // click outside Ustensils
  searchUstensilsInput.classList.add("hide");
  searchUstensilsInput.value = "";
  searchUstensilsLabelInput.classList.remove("hide");
  searchListBlockUstensils.classList.add("hide");
  searchUstensilsExpand.classList.remove("rotated");
  searchUstensils.classList.remove("w-50");
  searchUstensils.style.width = "185px";
  searchUstensilsInput.classList.remove("w-100");
  searchListBlockUstensils.classList.remove("w-100");
  searchListUstensils.classList.remove("expand-search-list");

  // verify if list ustensils contains display none
  const searchlistItemUstensils = document.querySelectorAll(
    ".search-list-ustensils li"
  );
  // replace display none to display block for list ustensils
  searchlistItemUstensils.forEach((list) => {
    if (list.style.display === "none") {
      list.style.display = "block";
    }
  });
});

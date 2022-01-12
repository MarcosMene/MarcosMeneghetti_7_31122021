import recipes from "../data/recipes.js";

// for (let i = 0; i < recipes.length; i++) {
// console.log(recipes[i].appliance);
// console.log(recipes[i].description);
// console.log(recipes[i].id);
// console.log(recipes[i].ingredients);
// console.log(recipes[i].name);
// console.log(recipes[i].servings);
// console.log(recipes[i].time);
// console.log(recipes[i].ustensils);
// }
// console.log(recipes);

// let ingredientsList = [];
// recipes.forEach((recipe) => {
//   if (recipe.ingredients.length) {
//     //method1
//     const ingredientsMap = recipe.ingredients.map((ingr) => ingr.ingredient);
//     ingredientsList.push(...ingredientsMap);
//     //method2
//     // recipe.ingredients.forEach((ingredient) => {
//     //   //   console.log(ingredient);
//     //   ingredientsList.push(ingredient.ingredient);
//     // });
//   }
// });
// console.log(ingredientsList);

// const inputValue = "fromage";
// let results = recipes.filter((obj) => {
//   return (
//     obj.name.includes(inputValue) ||
//     obj.description.includes(inputValue) ||
//     obj.ingredients.find((ingredient) =>
//       ingredient.ingredient.includes(inputValue)
//     ) ||
//     obj.ustensils.find((ustensil) => ustensil.includes(inputValue))
//   );
// });

// console.log(results);

function getElementsInRecipes(recipes, elementToGet) {
  let list = [];
  switch (elementToGet) {
    case "ingredients":
      recipes.forEach((recipe) => {
        if (recipe.ingredients.length) {
          const ingredientsMap = recipe.ingredients.map(
            (ingr) => ingr.ingredient
          );
          // list.push(ingredientsMap);
          list.push(...ingredientsMap);
        }
      });

      return list;
    case "ustensils":
      recipes.forEach((recipe) => {
        if (recipe.ustensils.length) {
          const ustensilsMap = recipe.ustensils;
          list.push(...ustensilsMap);
        }
      });

      return list;
    case "appliance":
      recipes.forEach((recipe) => {
        if (recipe.appliance.length) {
          const applianceMap = recipe.appliance;
          list.push(applianceMap);
          // list += [applianceMap];
        }
      });

      return list;
  }
}

const myIngredientsTags = getElementsInRecipes(recipes, "ingredients");
const myUstensilsTags = getElementsInRecipes(recipes, "ustensils");
const myAppareilsTags = getElementsInRecipes(recipes, "appliance");

// remove repeated words in the array
const listIngredientsTag = new Set(myIngredientsTags);
const listUstensilsTag = new Set(myUstensilsTags);
const listAppareilsTag = new Set(myAppareilsTags);

console.log(listIngredientsTag);
console.log(listUstensilsTag);
console.log(listAppareilsTag);

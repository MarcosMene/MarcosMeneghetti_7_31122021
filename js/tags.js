// function getElementsInRecipes(recipes, elementToGet) {
//   let list = [];
//   switch (elementToGet) {
//     case "ingredients":
//       recipes.forEach((recipe) => {
//         if (recipe.ingredients.length) {
//           const ingredientsMap = recipe.ingredients.map(
//             (ingr) => ingr.ingredient
//           );

//           list.push(...ingredientsMap);
//         }
//       });

//       return list;
//     case "ustensils":
//       recipes.forEach((recipe) => {
//         if (recipe.ustensils.length) {
//           const ustensilsMap = recipe.ustensils;
//           list.push(...ustensilsMap);
//         }
//       });

//       return list;
//     case "appliance":
//       recipes.forEach((recipe) => {
//         if (recipe.appliance.length) {
//           const applianceMap = recipe.appliance;
//           list.push(applianceMap);
//         }
//       });

//       return list;
//   }
// }

function cardsFactory(data) {
  const {
    id,
    name,
    time,
    ingredients,
    ingredient,
    quantity,
    quantite,
    unit,
    unite,
    description,
  } = data;

  function cardsRecipesDOM() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("col-sm-6", "col-lg-4", "mb-5", "card-recipe");

    let elementCard = "";
    elementCard += `
  <div class="card text-dark bg-light mb-3">
    <img src="./assets/recettes/${id}.jpg" class="card-img-top" alt="${name}">
    <div class="card-body">
       
        <div class="card-header-title d-flex justify-content-between align-items-start">
            <h2>${name}</h2>
            <div class="d-flex align-items-center justify-content-between card-timing">
                <i class="far fa-clock"></i>
                <h3 class="card-text">${time} min</h3>
            </div>
        </div>
        <div class="d-flex justify-content-between card-recette">
            <div class="w-50 card-body-ingredient">`;

    ingredients.forEach((ingredient) => {
      elementCard += `
        <strong>${ingredient.ingredient}:</strong> <span>${
        ingredient.quantity ? ingredient.quantity : (ingredient.quantity = "")
      } <span>${
        ingredient.quantite ? ingredient.quantite : (ingredient.quantite = "")
      } ${ingredient.unit ? ingredient.unit : (ingredient.unit = "")} ${
        ingredient.unite ? ingredient.unite : (ingredient.unite = "")
      }</span><br />
        `;
    });

    elementCard += `

            </div>

            <div class="w-50 card-body-description">
           <p>${description}</p>  
            </div>
        </div>
    </div>
    </div>
  
      `;
    wrapper.innerHTML = elementCard;
    return wrapper;
  }
  return {
    id,
    name,
    time,
    ingredient,
    ingredients,
    quantity,
    quantite,
    unit,
    unite,
    cardsRecipesDOM,
  };
}

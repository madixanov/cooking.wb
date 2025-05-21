const recipes = [
  {
    name: "Pizza",
    image: "images/food/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.avif",
    ingredients: "Margherita, Pepperoni and Olive, Chicken or BBQ, Sausage and Cheese, Onions and Mushrooms"
  },
  {
    name: "Spaghetti",
    image: "images/food/spaghetti.webp",
    ingredients: "Olive oil, Garlic, Onion, Crushed tomatoes, Salt, Black pepper, Sugar, Basil, Oregano, Parmesan"
  },
  {
    name: "Steak",
    image: "images/food/sirloin-steak-recipe.jpg",
    ingredients: "Steak, Salt, Black pepper, Olive oil, Garlic, Rosemary or thyme"
  },
  {
    name: "Meat Pide",
    image: "images/food/pide.jfif",
    ingredients: "Ground beef or lamb, Onion, Tomato paste, Garlic, Red pepper flakes, Salt, Parsley"
  }
];

const foodList = document.querySelector(".food-list");

recipes.forEach(recipe => {
  const card = document.createElement("div");
  card.className = "food-card";
  card.innerHTML = `
    <div class="container-food-photo">
        <img src="${recipe.image}" alt="${recipe.name}" class="food-photo">
    </div>
    <div class="food-description">
        <div class="food-description-content">
            <div class="name-card">${recipe.name}</div>
            <div class="ingridient-card">${recipe.ingredients}</div>
        </div>
        <div class="button-container">
            <button class="about-button">About</button>
        </div>
    </div>
  `;
  foodList.appendChild(card);
});


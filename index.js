const API_KEY = "275d58779ccf4e22af03e792e8819fff";

const list = document.querySelector(".list");

async function getRecipies() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const responseData = await response.json();
  return responseData.recipes;
}

function display(recipies) {
  recipies.forEach((recipie) => {
    const li = document.createElement("li");
    li.classList.add("list-item");

    list.appendChild(li);

    const img = document.createElement("img");
    console.log("recipie", recipie);
    img.src = recipie.image;
    img.alt = "food image";
    li.appendChild(img);

    const heading = document.createElement("h3");
    heading.innerText = recipie.title;
    li.appendChild(heading);

    const description = document.createElement("p");
    description.innerHTML = `<strong>Ingredients:</strong> ${recipie.extendedIngredients.map(
      (ingredient) => ingredient.original
    )}`;
    li.appendChild(description);

    const link = document.createElement("a");
    link.href = recipie.sourceUrl;
    link.innerText = "VIEW RECIPE";
    li.appendChild(link);
  });
}

async function init() {
  const recipies = await getRecipies();
  display(recipies);
}
init();

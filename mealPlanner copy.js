//Foodbrain meal planning engine

var recipeList;
var selectedDay;

let dayElement = document.getElementsByClassName("days");
for (let i = 0; i < dayElement.length; i++) {
  dayElement[i].addEventListener("click", function () {
    selectedDay = dayElement[i].textContent;
    console.log(selectedDay);
  });
}

function storeRecipe(response) {
  recipeList = response;
}

function recipeGET(q) {
  $.ajax({
    url: `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=5f0512d8&app_key=d4315da556a7fb0bd05aefac3f48761b`,
    type: "get",
    async: false,
    success: function (data) {
      storeRecipe(data.hits);
    },
  });
}

recipeGET("chicken");

function recipePrint(givenRecipe) {
  let recipeContainer = document.createElement("div");
  recipeContainer.setAttribute("class", "recipeContainer");

  let recipeImage = document.createElement("img");
  recipeImage.src = givenRecipe.image;
  recipeImage.style.display = "inline";
  recipeContainer.appendChild(recipeImage);

  let recipeDescription = document.createElement("p");
  recipeDescription.textContent = givenRecipe.label;
  recipeContainer.appendChild(recipeDescription);

  return recipeContainer;
}

let modalContainer = document.getElementsByClassName("recipeModal")[0];
let close = document.getElementsByClassName("close")[0];
let modalContent = modalContainer.getElementsByClassName("modalContent")[0];

for (i = 0; i < 3; i++) {
  try {
    modalContent.appendChild(recipePrint(recipeList[i].recipe));
  } finally {
    recipeModal();
  }
}

function recipeModal() {
  modalContainer.style.display = "block";
}

close.onclick = function () {
  modalContainer.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
};

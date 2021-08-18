// Foodbrain meal planning engine

var selectedRecipe;
function storeRecipe(response) {
  return (selectedRecipe = response);
}

function yourMom(q) {
  $.ajax({
    url: `https://api.edamam.com/api/recipes/v2?type=public&q=${q}&app_id=5f0512d8&app_key=d4315da556a7fb0bd05aefac3f48761b`,
    type: "get",
    async: false,
    success: function (data) {
      storeRecipe(data);
    },
  });
}

yourMom("chicken");
console.log(selectedRecipe);

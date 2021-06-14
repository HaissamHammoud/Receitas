function clickHome(){
    let newUrl = "../home/index.html";
    document.location.href = newUrl;
}

function clickRecipe(){
    let newUrl = "../listRecipes/list-recipe.html";
    document.location.href = newUrl;
}

function clickLogin(){
    let newUrl = "/#";
    document.location.href = newUrl;
}

function clickRecipeDay(){
    let newUrl = "../show-recipe/show-recipe.html";
    document.location.href = newUrl;
}



$.getJSON("../data/mainpage.json", function(result){
    document.getElementById('first').innerHTML = result[0].description;
    document.getElementById('second').innerHTML = result[1].description;
    document.getElementById('third').innerHTML = result[2].description;
    document.getElementById('fourth').innerHTML = result[3].description;
    document.getElementById('ingred1').innerHTML = result[4].ingrediente;
    document.getElementById('ingred2').innerHTML = result[5].ingrediente;
    document.getElementById('ingred3').innerHTML = result[6].ingrediente;
    document.getElementById('ingred4').innerHTML = result[7].ingrediente;
    document.getElementById('ingred5').innerHTML = result[8].ingrediente;
    document.getElementById('ingred6').innerHTML = result[9].ingrediente;
    document.getElementById('ingred7').innerHTML = result[10].ingrediente;
    document.getElementById('icon1').innerHTML = result[11].tempo;
    document.getElementById('icon2').innerHTML = result[11].rendimento;
    document.getElementById('icon3').innerHTML = result[11].likes;
});
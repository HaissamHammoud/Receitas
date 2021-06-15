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

$.getJSON("../data/recipepage.json", function(data){
    document.getElementById('n1').innerHTML = data[0].nome;
    document.getElementById('r1').innerHTML = data[0].resumo;
    document.getElementById('n2').innerHTML = data[1].nome;
    document.getElementById('r2').innerHTML = data[1].resumo;
    document.getElementById('n3').innerHTML = data[2].nome;
    document.getElementById('r3').innerHTML = data[2].resumo;
    document.getElementById('n4').innerHTML = data[3].nome;
    document.getElementById('r4').innerHTML = data[3].resumo;
    document.getElementById('n5').innerHTML = data[4].nome;
    document.getElementById('r5').innerHTML = data[4].resumo;
    document.getElementById('n6').innerHTML = data[5].nome;
    document.getElementById('r6').innerHTML = data[5].resumo;
    document.getElementById('n7').innerHTML = data[6].nome;
    document.getElementById('r7').innerHTML = data[6].resumo;

});
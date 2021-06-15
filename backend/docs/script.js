const main = document.querySelector('#main1');
const body = document.querySelector('#body');
const bodyshow = document.querySelector('#bodyshow');

//Chamando main dinamicamente
fetch('/pages/home/main.html')
    .then(res => res.text())
    .then(texto => {
        main.innerHTML = texto;
        //Chamando JSON dinamicamente
        $.getJSON("../data/mainpage.json", function(result){
            console.log(result);
            document.querySelector('#first').innerHTML = result[0].description;
            document.querySelector('#second').innerHTML = result[1].description;
            document.querySelector('#third').innerHTML = result[2].description;
            document.querySelector('#fourth').innerHTML = result[3].description;
            document.querySelector('#ingred1').innerHTML = result[4].ingrediente;
            document.querySelector('#ingred2').innerHTML = result[5].ingrediente;
            document.querySelector('#ingred3').innerHTML = result[6].ingrediente;
            document.querySelector('#ingred4').innerHTML = result[7].ingrediente;
            document.querySelector('#ingred5').innerHTML = result[8].ingrediente;
            document.querySelector('#ingred6').innerHTML = result[9].ingrediente;
            document.querySelector('#ingred7').innerHTML = result[10].ingrediente;
            document.querySelector('#icon1').innerHTML = result[11].tempo;
            document.querySelector('#icon2').innerHTML = result[11].rendimento;
            document.querySelector('#icon3').innerHTML = result[11].likes;
        });
    });

//Chamando body do list dinamicamente
fetch('/pages/listRecipes/mainlist.html')
    .then(res => res.text())
    .then(texto => {
        body.innerHTML = texto;
        //Chamando JSON dinamicamente
        $.getJSON("../data/recipepage.json", function(data){
            document.querySelector('#n1').innerHTML = data[0].nome;
            document.querySelector('#r1').innerHTML = data[0].resumo;
            document.querySelector('#n2').innerHTML = data[1].nome;
            document.querySelector('#r2').innerHTML = data[1].resumo;
            document.querySelector('#n3').innerHTML = data[2].nome;
            document.querySelector('#r3').innerHTML = data[2].resumo;
            document.querySelector('#n4').innerHTML = data[3].nome;
            document.querySelector('#r4').innerHTML = data[3].resumo;
            document.querySelector('#n5').innerHTML = data[4].nome;
            document.querySelector('#r5').innerHTML = data[4].resumo;
            document.querySelector('#n6').innerHTML = data[5].nome;
            document.querySelector('#r6').innerHTML = data[5].resumo;
            document.querySelector('#n7').innerHTML = data[6].nome;
            document.querySelector('#r7').innerHTML = data[6].resumo;
        });
    });

//Chamando body do show dinamicamente
fetch('/pages/show-recipe/mainshow.html')
    .then(res => res.text())
    .then(texto => {
        bodyshow.innerHTML = texto;
    });

//Funções para alterar path dinamicamente
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

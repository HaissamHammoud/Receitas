const main = document.querySelector('body');
const home = document.querySelector('#home');
const login = document.querySelector('#login');
const clickHome = document.querySelector('#list');

clickHome.onclick = function(e){
    e.preventDefault();
    alert('oi');
}

/*fetch('/listRecipes/list-recipe.html')
    .then(res => res.text())
    .then(html => {
        main.innerHTML = html;
    })*/

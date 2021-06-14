function clickLogin(e){
    alert('oi');
    e.preventDefault();
}

$.getJSON("../data/mainpage.json", function(result){
    console.log(result);
});
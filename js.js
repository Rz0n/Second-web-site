let first = document.querySelector('#btn');
let second = document.querySelector('#btn-2');
let three = document.querySelector('#btn-3');

first.addEventListener('click', function(){
    window.open("recipes/smokedSalmon.html");
});

second.addEventListener('click', function(){
    window.open("recipes/easySalmon.html");
});

three.addEventListener('click', function(){
    window.open("recipes/lemonSalmon.html");
});
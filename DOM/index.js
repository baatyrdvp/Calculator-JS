let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let plus = document.querySelector('#plus');
let minus = document.querySelector('#minus');
let delenie = document.querySelector('#delenie');
let umnozhenie = document.querySelector('#umnozhenie');
let result = document.querySelector('#result');

plus.addEventListener('click', function() {
    let sum = +input1.value + +input2.value;
    result.textContent = sum
});

minus.addEventListener('click', function() {
    let sum = +input1.value - +input2.value;
    result.textContent = sum
});

delenie.addEventListener('click', function() {
    let sum = +input1.value / +input2.value;
    result.textContent = sum
});

umnozhenie.addEventListener('click', function() {
    let sum = +input1.value * +input2.value;
    result.textContent = sum
});
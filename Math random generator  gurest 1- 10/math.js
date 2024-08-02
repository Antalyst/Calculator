// math random number genrator

const number = document.querySelector('.number');
const btn = document.querySelector('.btn');

const numbers = [{
    number: 1
},{
    number: 2
},{
    number: 3
},{
    number: 4
},{
    number: 6
},{
    number: 7
},{
    number: 8
},{
    number: 9
},{
    number: 10
},];


//  ANONMOUST FUNCTION 
btn.addEventListener('click', function() {

    let = random = Math.floor(Math.random() * numbers.length)

    number.innerHTML = numbers[random].number;
})

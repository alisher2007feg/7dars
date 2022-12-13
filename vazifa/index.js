
//htmldan form elementlarni chaqrp olish
var form = document.getElementById('form')
var inputNumber = document.getElementById('number')
var result = document.getElementById('result')
var btn = document.querySelector('.btn')
var otvet = document.getElementsByClassName('otvet')



console.log('otvet')


form.addEventListener("sumbit", function(e){
e.preventDefault()
if (i % 3 === 0 && i % 5 === 0) {
    otvet.textContent= fizzbuzz
} 
else if (i % 3 === 0 && i % 5 === 0) {
    otvet.textContent= bizzbuz
}
else if ( i % 5 === 0) {
    otvet.textContent= fizz
}

})

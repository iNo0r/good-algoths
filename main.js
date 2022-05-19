/*    
    Greates Common Divison
    ----------------------
    this function will assist finding the greatest common divisor of 2 number 
    https://www.w3resource.com/javascript-exercises/javascript-math-exercise-8.php

 */

function gcd_two_numbers(number1, number2) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') return 'both inputs should be numbers'
    if (isNaN(number1) || isNaN(number2)) return "input cannot be NaN"

    //means while number2 is not 0, because 0 === false
    while (number2) {
        let inHand = number2;
        number2 = number1 % number2;
        number1 = inHand
    }
    return number1
}

console.log(gcd_two_numbers(12, 13));
console.log(gcd_two_numbers(9, 3));
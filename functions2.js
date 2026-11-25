// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. 
// Note: The argument passed must NOT be the same number.
function multiply(num1, num2, num3) {
    return num1 * num2 * num3
}

// // TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. 
// ***Do not use a console.log() inside of the function***
const convertToSeconds = function (minutes) {
    return minutes * 60
}

// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. 
// ***Do not useaconsole.log() inside of the function***
function fahrenheitToCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
}

// TODO: Create a function that takes a string as a parameter and returns thereverseof the string. 
// ***Do not use a console.log() inside of the function ***
function reverseString(str) {
    return str.split("").reverse().join("");
}

// TODO: Create a function that takes in a string and returns the number of Vowelsinthe sentence.
//  E.g. countVowels(‘Javascript’) //output =3 
// ***Do not use a console.log() inside of the function***
function countVowels(sentence) {
    let count = 0;
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < sentence.length; i++) {
        if (vowels.includes(sentence[i])) {
            count++
        }
    }
    return count
}

// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

//testing output(just to make sure)
console.log(multiply(3, 10, 6))
console.log(convertToSeconds(20))
console.log(fahrenheitToCelcius(45))
console.log(reverseString("Academy"))
console.log(countVowels("Agricultural practices and Growth"))
console.log(isPrime(5))
console.log(isPrime(24))
console.log(isPrime(19))
console.log(isPrime(21))
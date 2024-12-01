function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(4)); 
console.log(isEven(7)); 


function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return Array.from(str).filter(char => vowels.includes(char)).length;
}
console.log(countVowels("hello")); 
console.log(countVowels("Saylani"));


function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); 
console.log(reverseString("world")); 


function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([1, 5, 3, 9, 2])); 
console.log(findMax([-3, -1, -7, -2])); 


function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello")); 


function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(6)); 
console.log(fibonacci(10));


function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5));
console.log(factorial(7)); 


function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
console.log(removeDuplicates(["a", "b", "a", "c"])); 


function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([10, -2, 5])); 



function sortArray(arr) {
    return arr.sort((a, b) => a - b);
}
console.log(sortArray([4, 1, 3, 2])); 
console.log(sortArray([10, -5, 0, 2])); 


function stringLength(str) {
    return str.length;
}
console.log(stringLength("hello"));
console.log(stringLength("Saylani Web Development"));


function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase("hello")); 
console.log(toUpperCase("saylani")); 



function capitalizeFirstLetter(str) {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
}
console.log(capitalizeFirstLetter("hello world")); 
console.log(capitalizeFirstLetter("saylani technical institute"));



function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2], [3, 4])); 
console.log(mergeArrays(["a", "b"], ["c", "d"])); 



function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7)); 
console.log(isPrime(10));



function countWords(str) {
    return str.trim().split(/\s+/).length;
}
console.log(countWords("Hello world!")); 
console.log(countWords("Saylani Technical Institute offers great courses.")); 



function arrayContains(arr, value) {
    return arr.includes(value);
}
console.log(arrayContains([1, 2, 3], 2)); 
console.log(arrayContains(["a", "b", "c"], "d")); 



function uniqueElements(arr) {
    return [...new Set(arr)];
}
console.log(uniqueElements([1, 2, 2, 3, 4, 4])); 
console.log(uniqueElements(["a", "b", "a", "c"])); 



function flattenArray(arr) {
    return arr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, 4]], 5])); 
console.log(flattenArray([[1, 2], [3, [4]]]));


function repeatString(str, num) {
    return str.repeat(num);
}
console.log(repeatString("hello", 3));
console.log(repeatString("abc", 2)); 




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); 
console.log(getRandomInt(5, 15)); 



function average(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}
console.log(average([1, 2, 3, 4]));
console.log(average([10, 20, 30])); 



function removeSpaces(str) {
    return str.replace(/\s+/g, '');
}
console.log(removeSpaces("Hello World"));
console.log(removeSpaces(" Saylani Technical Institute "));



function difference(arr) {
    return Math.max(...arr) - Math.min(...arr);
}
console.log(difference([1, 5, 3, 9, 2]));
console.log(difference([10, -5, 20, 3]));



function shuffledArray(arr) {
    return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffledArray([1, 2, 3, 4, 5])); 
console.log(shuffledArray(["a", "b", "c", "d"]));




















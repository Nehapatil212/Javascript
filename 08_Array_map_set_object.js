console.log("****************1) Length of array*******************************");
let array = [20,31,40,25,23,11,29,9,60,2,11];
var length= array.length;
console.log("Given array :[20,31,40,25,23,11,29,9,60,2,11]")
console.log("Length of array :",length);
console.log("****************2) first and last element in array***************")
console.log("Given array :[20,31,40,25,23,11,29,9,60,2,11]");
const indexOf0 = array.indexOf(0);

console.log(`First element : ${array[0]}`);

const indexOf4 = array.indexOf(4);

console.log(`Last Element :  ${array[10]}`);
console.log("****************3)Third last element of array******************")
let arr = [20,31,40,25,23,11,29,9,60,2,11];
let thirdLast = arr[arr.length - 3]; 

console.log("Third last element of array :",thirdLast);

console.log("************4) All even numbers in array using loop************")
let arrEven = [20,31,40,25,23,11,29,9,60,2,11];

for (let i = 0; i < arrEven.length; i++) {
    if (arrEven[i] % 2 === 0) {
        console.log( arrEven[i]); // Print even number
    }
}

console.log("************5) All odd numbers in array using loop************")
let arrOdd = [20,31,40,25,23,11,29,9,60,2,11];

for (let i = 0; i < arrOdd.length; i++) {
    if (arrOdd[i] % 2 == 1) {
        console.log(arrOdd[i]); 
    }
}

console.log("************6) sum of all even positioned elements in array************")
let arr1 = [20,31,40,25,23,11,29,9,60,2,11];
let sum = 0;

for (let i = 0; i < arr1.length; i++) {
    if (i % 2 === 0) { // Check if the index is even
        sum += arr1[i];
    }
}
console.log("Sum of all even positioned :", sum);

console.log("************7) sum of all odd positioned elements in array************")
let arr2 = [20,31,40,25,23,11,29,9,60,2,11];
let sumOdd = 0;

for (let i = 0; i < arr2.length; i++) {
    if (i % 2 === 1) { // Check if the index is odd
        sumOdd += arr1[i];
    }
}
console.log("Sum of all odd positioned :", sumOdd);

console.log("************8) sum of all  elements in array************")
let arrSum = [20,31,40,25,23,11,29,9,60,2,11];
let sumarr = 0;

for (let i = 0; i < arrSum.length; i++) {
    sumarr += arrSum[i];
}

console.log("The sum of all elements is:", sumarr);


console.log("************9) The number which are multiple of five is************")
let arrMult = [20,31,40,25,23,11,29,9,60,2,11];
let multiplesOfFive = [];

for (let i = 0; i < arrMult.length; i++) {
    if (arrMult[i] % 5 === 0) {
        multiplesOfFive.push(arrMult[i]);
    }
}

console.log("The number which are multiple of five is:", multiplesOfFive); 

console.log("************10) Number 115 is available in array:************")
const map = new Map();

map.set(115);


console.log(`Is key available: ${map.has("number")}`);
console.log("************11) Number 23 is available in array:************")
let arr4 = [20,31,40,25,23,11,29,9,60,2,11];
let elementToCheck = 23;

if (arr4.indexOf(elementToCheck) !== -1) {
    console.log(`${elementToCheck} is key available in the array: true`);
} else {
    console.log(`${elementToCheck} is not available in the array.`);
}
console.log("************12) Insert number 55,66 at index 3 :************")
let arrNum = [20,31,40,25,23,11,29,9,60,2,11];
let index = 3

arrNum.splice(index, 0, 55, 66);

console.log(arrNum);

console.log("************13) Delete 3 element starting of index 4 :************")
let arr3 = [20,31,40,25,23,11,29,9,60,2,11];

let startIndex = Math.floor(arr3.length / 2) - 1;


arr3.splice(startIndex, 3);

console.log(arr3);
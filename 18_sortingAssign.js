const arrRollNum = [113,45,56,11,32,45,109,799,56,45];

console.log("**********1)Reverse the given array**************************")
let arr = arrRollNum.reverse();
console.log(arr);

console.log("****2)using sort() method without any custom logic given array**")
arrRollNum.sort();
console.log(arrRollNum);
// let sortedArr = arrRollNum.sort();

// The greatest number is now the last element in the sorted array
// let greatestNum = sortedArr[sortedArr.length - 1];

// console.log(greatestNum );

console.log("**********3)sort the ascending order given array**************************")
let sortedArray = arrRollNum.sort((a,b) =>{
    return a>b ? 1 :-1;
    });

console.log(sortedArray);

console.log("**********4) Find gretest number of  given array**************************")
let sortedArray1 = arrRollNum.sort(function(a, b) {
    return b - a;
});
let greatestNumber = sortedArray1[0];
console.log("Grestest Number: ",greatestNumber);
console.log("**********5) Find Smallest number of  given array**************************");
let small = arrRollNum.sort(function(a,b){
    return a-b;
});
let smallestNumber =small[0];
console.log("Smallest Number: ",smallestNumber);
console.log("**********6) Remove duplicate number of  given array**************************");
let duplicate = [...new Set(arrRollNum)];
console.log(duplicate);
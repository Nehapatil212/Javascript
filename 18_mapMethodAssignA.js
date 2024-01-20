const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];


console.log("**************Added 10 into each elements of array************");

console.log("Given array :", arrayNumbers)

const arrayTrans = arrayNumbers.map( (currentValue) => {
    return currentValue + 10;
} )
console.log("Added 10 into each elements :", arrayTrans);
console.log("")
console.log("**************Cube the each elements of array************");

    const cubedArray = arrayNumbers.map(element => element ** 3);


console.log("Cube of each element :", cubedArray);

console.log("")
console.log("**************Add the index value of each elements of array************");

arrayNumbers.map((index,element)=>{
    console.log(`Index ==> ${element}, Value ==> ${index}`);
})
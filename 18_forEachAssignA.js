const arrayNumber = [1,-7,40,502,-77,91 ,0,108,89,-601];
console.log("*********************Given array************************");
arrayNumber.forEach( (index, array)=>{
  
    console.log(`Index ==> ${array}, Value ==> ${index}`);
} );

console.log("*********************Print positive numbers in array************************");
arrayNumber.forEach( (index,element) => {
    if (element>0) {
        console.log(`Index ==> ${element}, Value ==> ${index}`);
    }
} );
console.log("*********************Print Negative numbers in array************************");
arrayNumber.forEach( (element) => {
    if (element<0) {
        console.log(element);
    }
} );
console.log("*********************Print Even numbers in array************************");
arrayNumber.forEach( (element) => {
    if (element%2==0) {
        console.log(element);
    }
} );
console.log("*********************Print Even numbers in array************************");
let sum =0;
arrayNumber.forEach((element)=> {
    sum  += element;
   
});
console.log("sum=>" ,sum);
console.log("*********************Print Even index value in array************************");
let evenIndexValues = [];

arrayNumber.forEach((element, index) => {
    if (index % 2 === 0) {
        evenIndexValues.push(element);
    }
});
console.log(evenIndexValues);
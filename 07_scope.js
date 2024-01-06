const country = "India"; // Variable declaration and Initialization
let age; // Variable decl.
console.log(age);
age = 32;
var city;
city = 'Pune';
console.log(city);

// country = "Bharath";
console.log(country);

age = 34;
console.log(age);

// Re declaration
// const country = "UK";
// let age = 40;
var city = "Mumbai";

// Scope
if (true) {
   var n1 = 100;
   let n2 =200;
   const n3 = 300; 
}
console.log(n1, "Function scoped");
// console.log(n2);
// console.log(n3);
console.log('Function ');
function show() {
    for (let index = 0; index < 2; index++) {
        var s1 = "S1";
        let s2 = "S2";
        const s3 = "S3";
        
    }
    console.log(s1);
    // console.log(s2);
     //console.log(s3);
}
show();
console.log("**********************************************************")
let sum = 0; 
for (let index = 1; index < 11; index++) {
   sum = sum + index;   
}
console.log(`Sum of Numbers from 1 to 10 is : ${sum}`);

// WAP to find the multiplication from 1 to 5
let multiply = 1;
for (let index = 1; index <=5; index++) {
    multiply = multiply * index;
    
}
console.log(`multiply of Numbers from 1 to 5 is : ${multiply}`);
console.log("**********************************************************")
console.log('=== Reading string char by char====');
let str = "Developer";
for (let index = 0; index < str.length; index++) {
    console.log(str.charAt(index)); 
}

let word = "Hard Work always pays back";
let result = "";
for (let index = word.length-1; index >=0; index--) {
     result = result + word.charAt(index); 
    //  result = result.concat(word.charAt(index));
}
console.log(`Reverse string is: ${result}`);
console.log("**********************************************************4")
let s1 = "I am a Very good IT Developer ";
let vowelsCount =0;
for (let index = 0; index < s1.length; index++) {
    let char = s1.charAt(index).toLowerCase();
    if (char== 'a' || char== 'e'|| char== 'i'  || char== 'o' || char== 'u' ||char== 'A' || char== 'E'|| char== 'I'  || char== 'O' || char== 'U') {
        vowelsCount = vowelsCount + 1;
    }
}
console.log("Given string : I am a Very good IT Developer ");
console.log(`Vowels count is: ${vowelsCount}`);
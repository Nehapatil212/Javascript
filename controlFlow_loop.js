console.log("********************count of vowels **************************************")
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
console.log("********************Sum of cube of numbers 1 to 5 **************************")
let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum += Math.pow(i, 3);
}

console.log("The sum of the cubes of numbers from 1 to 5 is:", sum);
console.log("********************3.1 step **************************")
let str = "Hard Work always pays back";

let result = "";

for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0 && str[i] !== ' ') { // Check if the index is odd and not an empty space
        result += str[i];
    }
}

console.log(result); 
console.log("********************3.2 step **************************")
let str1 = "Soon I will be IT UI champ ";

let result1 = "";

for (let i = 0; i < str.length; i++) {
    if (i % 2 !== 0 && str1[i] !== ' ') { // Check if the index is odd and not an empty space
        result1 += str1[i];
    }
}

console.log(result1); 
console.log("*****************Reverse String **************************")
let str2 = "Hard Work always pays back";
let reversedStr1 = str2.split('').reverse().join('');
console.log("Given string is :",str2)
console.log(reversedStr1); 

let str3 = "Soon I will be UI IT champ";
let reversedStr = str3.split('').reverse().join('');
console.log("Given string is :",str3)
console.log(reversedStr); 
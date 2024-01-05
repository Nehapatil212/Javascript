var isEvenOrOdd = function (num) {
  var returnValue = "";
  if (num % 2 == 0) {
    returnValue = "EVEN";
  } else {
    returnValue = "ODD";
  }
  return returnValue;
};
var isVoteOrNot = function (age) {
   var ans="";
    if(age>=18){
    console.log(" neha You are eligible for vote");
    } 
    else if(age<17) 
    {
        ans=" You are eligible for vote";
    }
   
    return(ans);
  };
console.log("********************STEP 1******************************")
var result = isEvenOrOdd(45);
console.log(`Given number is 45 it is a ${result} number`);
var result = isEvenOrOdd(40);
console.log(`Given number is 70  it is a ${result} number`);
var result = isEvenOrOdd(67);
console.log(`Given number is 67 it is a ${result} number`);
var result = isEvenOrOdd(98);
console.log(`Given number is 98  it is a ${result} number`);

console.log("********************STEP 2******************************")

var result = isVoteOrNot(18);
console.log(` ${result} `);
var result = isVoteOrNot(20);
console.log(` ${result} `);
var result = isVoteOrNot(17);
console.log(` ${result} `);
var result = isVoteOrNot(40);
console.log(` ${result} `);

console.log("********************STEP 3******************************")
var value= "Javascript-ES6";
var str1 = value.length;
console.log("Given string is Javascript: " ,str1)

console.log("********************STEP 4******************************")
var value="Javascript-language";
var str2 = value.length;
var result = value.startsWith("Java");
console.log(" String more than charector",str2);
console.log(" String more than charector",result);

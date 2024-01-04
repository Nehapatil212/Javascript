var isEvenOrOdd = function (num) {
  var returnValue = "";
  if (num % 2 == 0) {
    returnValue = "EVEN";
  } else {
    returnValue = "ODD";
  }
  return returnValue;
};
var isVoteOrNot = function (age,name) {
   if(name=="neha"){
    console.log("hi",name);

   }
   else {
    console.log(name ,"bye")
   }
   
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
var result = isEvenOrOdd(23);
console.log(`Given number is 45 it is a ${result} number`);
var result = isEvenOrOdd(30);
console.log(`Given number is 70  it is a ${result} number`);
var result = isEvenOrOdd(23);
console.log(`Given number is 67 it is a ${result} number`);
var result = isEvenOrOdd(30);
console.log(`Given number is 98  it is a ${result} number`);

console.log("********************STEP 2******************************")

var result = isVoteOrNot(22,"neha");
console.log(` ${result} `);
var result = isVoteOrNot(18,"om");
console.log(` ${result} `);
console.log(`sorry, You are not eligible for voting`);
console.log("********************STEP 1******************************")
var text=" Neha Patil";
var length = text.length;
console.log(" String more than ${length} charector");

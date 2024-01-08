var a = 10;
var b = -10;
var c = Math.max(a, b);
console.log("Given number is (10,-10) .The graetest number is :", c);
console.log("********************STEP 1******************************");

var a = 800;
var b = 899;
var c = Math.max(a, b);
console.log("Given number is (800,899) .The graetest number is :", c);
console.log("********************STEP 2******************************");

var isEvenOrOdd = function (num) {
  var returnValue = "";
  if (num % 2 == 0) {
    returnValue = "EVEN";
  } else {
    returnValue = "ODD";
  }
  return returnValue;
};
console.log("********************STEP 3*****************************");

var result = isEvenOrOdd(29);
console.log(`Given number is 29 it is a ${result} number`);
var result = isEvenOrOdd(44);
console.log(`Given number is 44  it is a ${result} number`);
var result = isEvenOrOdd(0);
console.log(`Given number is 0 it is a ${result} number`);
var result = isEvenOrOdd(101);
console.log(`Given number is 101  it is a ${result} number`);
console.log("********************STEP 4******************************");

// var str="Javascript";
// function wordsLen(str) {
//   const array = str;
//   return array.length;
// }

// var string_length=str.length;
// console.log("Given Word is =>'Javascript'");
// console.log("Length of words is => ", wordsLen(str));
// console.log("Given words is ", string_length % 2 == 0);

// var isEvenOrOdd = function (str) {
//     var returnValue = "";
// if(str % 2 == 0)
// {
//     returnValue = "EVEN";
//     console.log("Words length is Even"); 
// }
// else if(str % 2 != 0){
//     returnValue = "Odd";
//     console.log("Given words is odd"); 
// }
// return returnValue;
// }
function wordsLen(givenword){
  var givenwordLen = givenword.length;
  console.log(givenword);

  if (givenwordLen%2==0)
  {
    console.log(givenword,'is even ');
  }
  else
  {
    console.log(givenword,'is odd ');
  }
}
wordsLen("Javascript");
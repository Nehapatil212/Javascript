const arrayNum = [ 5, 1, 6, 8, 7];
const arrayTransformed = arrayNum.map( (currentValue) => {
    return currentValue * currentValue;
} )

console.log(arrayTransformed);

const arrayTrans = arrayNum.map( (currentValue) => {
    return currentValue + 100;
} )
console.log(arrayTrans);

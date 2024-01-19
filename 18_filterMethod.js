const arrayNum = [ 55, 11, 66, 18,  20, 73]; 
const array = [];
arrayNum.forEach( (element)=> {
    if (element%5==0) {
        array.push(element);
    }
});
console.log(array);

const arr = arrayNum.filter( (currentValue) => {
    return currentValue%5==0;
} );
console.log(arr);
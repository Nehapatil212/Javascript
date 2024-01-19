const arrayNum = [ 5, 1, 6, 8,  2, 3]; 
const sum = arrayNum.reduce( (runningTotal, value) => {
    return runningTotal * value;
});
console.log(sum);
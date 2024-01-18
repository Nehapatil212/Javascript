//1 Arrow Function with no arguments and no return value
const show = () => {
    console.log(`Inside Arrow Function with no arguments and no return value `);
}
show();

//2 Arrow Function with arguments and no return value
const add = (num1, num2) => {
    console.log(`Addition is: ${num1+num2}`);
}
add(10, 40);

//3 Arrow Function with arguments and return value
const multiply = (n1, n2) => {
    return n1*n2;
}
const returnValue = multiply(5, 5);
console.log(`Multiplication is: ${returnValue}`);
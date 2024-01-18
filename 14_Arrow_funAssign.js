const show = () => {
    console.log(`Good Morning , Today is a Thursday `);
}
show();
console.log("***************************************************************");
//2 Arrow Function with arguments and return value
const multiply = (n1, n2) => {
    return n1*n2;
}
const returnValue = multiply(5, 10);
console.log(`Multiplication of Given Value is: ${returnValue}`);


const multiple = (n1, n2) => {
    return n1*n2;
}
const returnValue1 = multiple(4, 10);
console.log(`Multiplication of Given Value is: ${returnValue1}`);

console.log("***************************************************************");
//3 Arrow Function with arguments and no return value
const add = (num1, num2,num3,num4,num5) => {
    console.log(`Addition of given value : ${num1+num2+num3+num4+num5}`);
}
add(100,100,200, 349, 756);

console.log("***************************************************************");
const add1 = (num1, num2,num3,num4,num5,num6,num7) => {
    console.log(`Addition of given value : ${num1+num2+num3+num4+num5+num6+num7}`);
}
add1('I',' Am', ' learning', ' ES6',' features', ' in', ' depth');
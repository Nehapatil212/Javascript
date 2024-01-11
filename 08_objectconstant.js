const keys = Object.keys(developer);
console.log(keys);
const values = Object.values(developer);
console.log(values);
console.log(`Is 'values' array ==>  ${Array.isArray(values)}`);
for (const element of values) {
     console.log(element);  
}
console.log(`Object entries....`);
const entries= Object.entries(developer);
for (const element of entries) {

    console.log(element);
}
console.log(`Accessing nested array element using double [] [] brackets`);
console.log(entries[0][0]);
console.log(entries[0][1]);
console.log(`==== in operator =====`);

const isAgeAvailable = "age" in developer;

console.log(`Is age Available: ${isAgeAvailable}`);

const isCityAvailable = "city" in developer;

console.log(`Is city Available: ${isCityAvailable}`);
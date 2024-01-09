let arrayNum = [4, 5, 6, 7, 3];

console.log(`Traversing an array using for of loop..`);

for (const element of arrayNum) {
    console.log(element);
}
console.log("***********************************************");
console.log(`==== WAP to count the vowels from the given string=======`);

const str = "Developer UI and Backend";

const vowels = "aeiou";

let count = 0;

for (const char of str) {
    console.log(char);

    if (vowels.includes(char.toLowerCase())) {
        count++;
    }
}

console.log(`Vowels count is: ${count}`);
console.log("***********************************************");
let arrayOfFriends = ["Jenny", "Elon", "Bill"];

const result = arrayOfFriends.join(",");

console.log(typeof result);

console.log(result);
console.log("***********************************************");
arrayOfFriends.reverse();

console.log(arrayOfFriends);

const word = "Developer UI and Backend";

const arrayOfWords = word.split(" ");

console.log(arrayOfWords.length);

const reverseStr = word.split("").reverse().join("");

console.log(reverseStr);
console.log("***********************************************");
let array1 = ["Jenny", "Menny", "Bill"];

// Spread Operator ...

console.log(array1); // ['Jenny', 'Menny', 'Bill']

console.log(...array1); // Jenny Menny Bill

const newArray = [...array1];

console.log(newArray);

console.log("***********************************************");
let array = [44, 22, 33, 44, 22, 66, 77];

console.log(array);

// Set

const setOfRollNum = new Set();

setOfRollNum.add(44);

setOfRollNum.add(22);

setOfRollNum.add(33);

setOfRollNum.add(44);

setOfRollNum.add(22);

setOfRollNum.add(66);

setOfRollNum.add(77);

console.log(setOfRollNum);

console.log(`Size is: ${setOfRollNum.size} `);

console.log(`Deleting 66`);

setOfRollNum.delete(66);

console.log(setOfRollNum);

console.log(`Is element available`);

console.log(setOfRollNum.has(22));

console.log("***********************************************");
console.log(`Traversing set collection....`);

for (const element of setOfRollNum) {

    console.log(element);

}

console.log("*************map **********************************");
const map = new Map();

map.set("Height", "6ft");

map.set("Weight", 78);

map.set("name", "Gajanan");

map.set("city", "Pune");

map.set("married_status", true);

console.log(map);

 

console.log(map.get("name"));

console.log(`Adding duplicate key - name`);

map.set("name", "Gajanan Kharat");

console.log(map);

 

map.set("country", "Pune");

console.table(map);

 

console.log(`Map size is: ${map.size}`);

map.delete("country");

console.table(map);

 

console.log(`Is key available: ${map.has("name")}`);

console.log(`Is key available: ${map.has("gender")}`);

 

console.log(map.keys());

console.log(map.values());

 

console.log(`Map traversing...`);

const keys = map.keys();

for (const key of keys) {

    console.log(`${key} ==> ${map.get(key)}`);

}
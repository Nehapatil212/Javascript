const arrayNum = [ 55, 11, 66, 18,  22, 73]; 

arrayNum.forEach( (currentValue, index, array)=>{
    console.log(currentValue, index, array);
} );

console.log(`========Using only currentValue ===========`);
arrayNum.forEach( (currentValue)=>{
    console.log(currentValue);
} );

console.log(`========WAP to find odd values ===========`);
arrayNum.forEach( (element) => {
    if (element%2!==0) {
        console.log(element);
    }
} );

console.log(`======== Program to traverse the set collection ===========`);
const setOfRollNum = new Set();
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(33);
setOfRollNum.add(44);
setOfRollNum.add(22);
setOfRollNum.add(66);
setOfRollNum.add(77);
console.log(setOfRollNum);

setOfRollNum.forEach( (item) => {
    console.log(item);
} );

console.log(`======== Program to traverse the map collection ===========`);

const map = new Map();
map.set("Height", "6ft");
map.set("Weight", 78);
map.set("name", "Gajanan");
map.set("city", "Pune");
map.set("married_status", true);
console.log(map);

map.forEach( (value, key) => {
    console.log(key, " ==> " ,value);
});
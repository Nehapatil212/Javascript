console.log(`*********************<= Given array =>******************`);

var arrayNN = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(arrayNN);
console.log(`****************First element and Last Element******************`);
const indexOf0 = arrayNN.indexOf(0);

console.log(`First element :' ${arrayNN[0]}`);

const indexOf4 = arrayNN.indexOf(4);

console.log(`Last Element : ' ${arrayNN[4]}`);

console.log(`****************After adding Papaya******************`);
arrayNN.unshift("Papaya");

console.log(arrayNN);

console.log(`****************After Removing Mango******************`);
let arr = ["Banana","Orange","Apple","Mango","Water Melon"];
let valueToRemove = 3; // Value of the element to remove

arr = arr.filter(item => item !== valueToRemove);

console.log(arr);
console.log(`****************After adding pineapple in last array******************`);
arr.push("Pineapple");

console.log(arr);
console.log(`****************After adding 'Dragan Fruit' before 'water melon'*******`);
let arr1 = ["Banana","Orange","Apple","Mango","Water Melon"];
let index = arr1.length - 1;

arr1.splice(index, 0, "Dragan Fruit");

console.log(arr1);

console.log(`****************After replacing 'Orange ' with 'kiwi'*******`);
let arr2 = ["Banana","Orange","Apple","Mango","Water Melon"];


arr2.splice(1, 1, "Kiwi" )

console.log(arr2);
console.log(`****************Element Starting from index 1 to 4 subway is:*******`);
let arr3 = ["Banana","Orange","Apple","Mango","Water Melon"];
let newArr = arr3.slice(1, 4); // Extracts elements from index 1 to 4 (excluding index 5)

console.log(newArr); 
console.log(`****************Last 3 elements of array  is:*******`);
let arr4 = ["Banana","Orange","Apple","Mango","Water Melon"];
let lastThree = arr4.slice(-3);

console.log(lastThree); 

console.log( `========= Print Numbers from 5 to 15 increamenting by 1 ==============`
);
for (let index = 5; index <= 15; index++) {
  console.log(index);
}
console.log( `========= Print Numbers from 50 to 40 decrementing by 1 ==============`
);
for (let index = 50; index >= 40; index--) {
  console.log(index);
}
console.log(`========= Print First 15 Odd Numbers ==============`);
for (let index = 1; index % 2 != 0 && index <= 30; index++) {
  console.log(index);
  index++;
}
console.log(`========= Print First 10 Even Numbers ==============`);
for (let index = 0; index % 2 == 0 && index <= 20; index++) {
  console.log(index);
  index++;
}

console.log(`========= Example of Infinite loop==============`);
// for (let index = 5; index < 10; index--) {
//    console.log(index); // 5 4 3 2 1 0 ----------
// }1 %2 ==0 && index <=15
console.log(`=========  table of 5  ==============`);

let n = 5;
for (let i = 1; i <= 10; ++i) console.log(n * i);

console.log(`=========  table of 10  ==============`);

let m = 10;
for (let i = 1; i <= 10; ++i) console.log(m * i);
console.log(`=========  table of 10  in reverse  ==============`);

let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

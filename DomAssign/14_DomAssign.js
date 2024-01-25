const projectName = document.getElementById("projectName");
console.log(projectName);
console.log(projectName.innerHTML);

console.log(`==========querySelectorAll() API with element h1 ==========`);
const mainheading = document.querySelectorAll('h1');
for (const element of mainheading) {
    console.log(element.innerHTML);
}

console.log(`==========querySelectorAll() API with element list==========`);
const secondadv = document.querySelectorAll('li');
for (const element of secondadv) {
    console.log(element.innerHTML);
}

console.log(`==========querySelector() API with id ==========`);
const divadv = document.querySelector("#advantage");
console.log(divadv.innerHTML);
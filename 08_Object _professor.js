
let professor = {
    professorName: "codemind",
    country: "India",
    Degree:"MS",
    city:"Pune",
    address:"Phase 1",
    degrees: {
                engineering: "CSC",
                phd: "Adv computing",
                intitude:"Fergusson college",
                university:"Savitribai Phule University",
               
        getDegree: function(){
           console.log(`Degree: engineering :${this.engineering}, phd:${this.phd},institude: ${this.intitude},university:${this.university}`); 
        }
    },
    certificates:["Hacker Rank Participation","Certificate of IFE course","Ceritificate in advance programming"],
  
    show: function(){
        console.log(`Inside show function`);
    }
}

console.log("**************1) Log all 5 properties***************************************************");
console.log("");
console.log(professor);
console.log("");
console.log("**************2) Add Nested object degress ***************************************************");
console.log("");
professor.degrees.getDegree();
console.log("");
console.log("**************3) Add New array certificates ***************************************************");
console.log("");
console.log("Certificates:",professor.certificates);

console.log("");
console.log("**************4)Add new property experince*******************************************************");
console.log("");
professor.experince = "14 years";
console.log("Add new Property Experinece");
console.log("Total Experience is",professor.experince);
console.log("");
console.log("****************5) Modify **********************************************************************");
console.log("");
professor.country= "USA";
console.log("Modify country");
console.log("New value of country:",professor.country);
console.log("**********6)Add new element certificate  in index 2***********************************************************");
console.log("");
let index = 2;

professor.certificates.splice(index,0, "Oracle Certified");
console.log(professor.certificates);console.log("");
console.log("**********7) Print last element of ceritificate array*****************************************");
console.log("");
const indexOf3 = professor.certificates.indexOf(3);

console.log(`Last Element of array:  ${professor.certificates[3]}`);
console.log("");
console.log("***********8)Log complete object on console***********************************************************");


console.log(professor)
console.log("");
console.log("***********9)Traverse array using loop***********************************************************");
console.log("");
for (const key in professor.certificates) {
    if (Object.hasOwnProperty.call(professor.certificates, key)) {
        const element = professor.certificates[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}
console.log("");
console.log("***********************************************************************************************");

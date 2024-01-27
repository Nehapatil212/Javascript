const arrayNumber = [20,3,4,56,90,400,49];

console.log("Given Array is :",arrayNumber);
console.log("*************1)Perform shollow Clone**************************");
const arraycloned = arrayNumber;
arraycloned.push(55,66);
console.log("Shallow clone push 55,66 in array",arraycloned);
console.log("");
console.log("*************2) Deep clone add 10,25 before 90 **************************");
const arrayclone= {...arrayNumber};
// arraycloned.push(55,66);
let index = arrayNumber.length - 1;

arrayNumber.splice(4, 0, "10","25");

console.log("Deep clone add 10,25 before 90",arraycloned);
console.log("");
console.log("*************3) Merge and concat this array with 'arrayNums **************************");
const arrayNums =  [20,3,4,56,90,400,49];
const arrayEven = [2, 30, 14, 8];

// Merge and concat the arrays using the spread operator
const mergedArray = [...arrayNums, ...arrayEven];

console.log(mergedArray);
console.log("");
console.log("*************4)Create Employee_info Object**************************");

const employee_info = {
    emp_id :27,
    emp_name: "John Doe",
    salary:{
        july_month : "40.0000INR",
        aug_month : "50.0000INR",
        jun_month : "65.0000INR",

    },
    address: {
        locality:{
            colany: " OM Vrindavan Society",
            street: " Kanch Pokli,431202",
        },
        city:"Mumbai",
        state: "Maharashtra",
        country: "India",

    },
    mobiles:["+91 8600 3456 88", "1800- 4567 32","+91-9096 5678 77"]
}
console.log("*************(5.a ) Log Employee Details **************************");

console.log("Address:Locality => ",employee_info.address.locality)
console.log("City: ",employee_info.address.city)
console.log("State: ",employee_info.address.state)
console.log("Country: ",employee_info.address.country)

console.log("*************(5.b ) Log Employee Details **************************");

console.log("Mobile numbers=> ",employee_info.mobiles)
console.log("");
console.log("*************6) Deep copy using JSON.stringify **************************");

console.log("*************(6.a)Update Property country of 'United Kindom' **************************");

console.log("Before updating value: ",employee_info.address.country);
employee_info.country="united kindom";
console.log("Updated value: ",employee_info.address.country="united kindom"); 

console.log("*************(6.b)Update Property 'July_month' salary 80k **************************");

console.log("Before updating value: ",employee_info.salary.july_month);
const deepcloneObj = employee_info.salary.july_month="80.0000INR";
console.log("Updated value: ",deepcloneObj); 








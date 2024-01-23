class Employee {
    // Data member or properties
    // Constructor
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company ){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept= emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
       
    }
    // Member Functions or methods
    getDetails(){
       console.log(`ID: ${this.emp_id}, Name: ${this.emp_name}, department: ${this.emp_dept}, salary: ${this.emp_salary} , company: ${this.emp_company}`);
    
    }
    getWipro(){
        console.log(`Employee Name: ${this.emp_name},  company name: ${this.emp_company}`);
     }
     getWork(){
        console.log(`Department Name: ${this.emp_dept},  company name: ${this.emp_company}`);
     }
    getAvg(){
        console.log(` Name: ${this.emp_name},  Department: ${this.emp_dept}`);
     }
     getGreater(){
        console.log(` ID: ${this.emp_id}, salary: ${this.emp_salary} , department: ${this.emp_dept}, company: ${this.emp_company}`);
    }
    getNamestartwithA_V_M(){
        console.log(`ID: ${this.emp_id}, Name: ${this.emp_name}, department: ${this.emp_dept}, salary: ${this.emp_salary} , company: ${this.emp_company}`);
    }
   
}

const emp_anil = new Employee(22, 'Anil', "IT", 50000,"TCS");
const emp_radha = new Employee(33, 'Radha', "HT", 74000,"Wipro");
const emp_rishi = new Employee(55, 'Rishi', "Finance", 47000,"TCS");
const emp_sonali = new Employee(66, 'Sonali', "Finance", 45000,"INFY");
const emp_monika = new Employee(77, 'Monika', "IT", 40000,"Wipro");
const emp_viny = new Employee(66, 'Vini', "IT", 75000,"TCS");
const emp_mahi = new Employee(77, 'Mahi', "HR", 85000,"INFY");
const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
// Program to traverse array of object
// for (const element of arrayEmployee) {
//    element.getDetails();
// }

console.log(`*****************Get the list of all working emp in Wipro***********************`);
// const emlp = arrayEmployee.filter(arrayEmployee => arrayEmployee.emp_company);
const array = arrayEmployee.filter( (element) => {
    if (element.emp_company=='Wipro') {
        element.getWipro(); 
    }
} );
console.log(`*****************Finding all emp working with 'IT' and 'HR' dept**************`);
const array2 = arrayEmployee.filter((element) =>{
    if (element.emp_dept=='IT' ||  element.emp_dept=='HR' ) {
        element.getWork(); 
    } 
 });
console.log(`*****************Emp whoes ID is Greater than 50'********************`);
const array1 = arrayEmployee.filter( (element) => {
   if (element.emp_id > 50 ) {
       element.getGreater(); 
   } 
});

 console.log(`*****************Finding Emp whoes start name with 'A' 'V' 'M'*************`);
 for (const element of arrayEmployee) {
    if (element.emp_name.startsWith('A') ||element.emp_name.startsWith('V') ||element.emp_name.startsWith('M')  ) {
        element.getNamestartwithA_V_M(); 
    } 
 }
console.log("*********************Average of ALL Employee salary ************************");

const avgSalary = arrayEmployee.filter(( element) => {
    return element.emp_company ;
} ) ;
let sum = 0;
avgSalary.forEach(element => {
    sum =sum+ element.emp_salary;
});
console.log(`Average of Wipro employee is : ${sum/avgSalary.length}`);


console.log(`*****************Average of IT dept Employee salary***********************`);
const avgSalaryy = arrayEmployee.filter(( element) => {
    return element.emp_dept == "IT" ;
} ) ;
let sum1 = 0;
avgSalaryy.forEach(element => {
    sum1 = sum1 + element.emp_salary;
});
console.log(`Average of Wipro employee is : ${sum1/avgSalaryy.length}`);

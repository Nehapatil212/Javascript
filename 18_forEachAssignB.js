
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
    getTCS(){
        console.log(` Name: ${this.emp_name},  company: ${this.emp_company}`);
     }
     getFinance(){
        console.log(` Name: ${this.emp_name},  Department: ${this.emp_dept}`);
     }
     getNamestartwithR(){
        console.log(`ID: ${this.emp_id}, Name: ${this.emp_name}, department: ${this.emp_dept}, salary: ${this.emp_salary} , company: ${this.emp_company}`);
    }
    getSalary(sum){
        console.log(` Sum of all employee salary :`);
    }
    getGreater(){
        console.log(`ID: ${this.emp_id}, Name: ${this.emp_name}, department: ${this.emp_dept}, salary: ${this.emp_salary} , company: ${this.emp_company}`);
    }
    getWork(){
        console.log(`ID: ${this.emp_id}, Name: ${this.emp_name}, department: ${this.emp_dept}, salary: ${this.emp_salary} , company: ${this.emp_company}`);
    }
}

const emp_anil = new Employee(22, 'Anil', "IT", 50000,"TCS");
const emp_radha = new Employee(33, 'Radha', "HR", 74000,"Wipro");
const emp_rishi = new Employee(55, 'Rishi', "Finance", 47000,"TCS");
const emp_sonali = new Employee(66, 'Sonali', "Finance", 45000,"INFY");
const emp_monika = new Employee(77, 'Monika', "IT", 40000,"Wipro");
const emp_viny = new Employee(66, 'Vini', "IT", 75000,"TCS");
const emp_mahi = new Employee(77, 'Mahi', "HR", 85000,"INFY");
const arrayEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
// Program to traverse array of object
for (const element of arrayEmployee) {
   element.getDetails();
}
console.log(`*****************Finding all emp working in 'TCS***********************`);

arrayEmployee.forEach((element)  =>{
    if (element.emp_company=='TCS') {
        element.getTCS(); 
    } 
} );
console.log(`*****************Emp whoes salary is greater than or equal to 50000 '*************`);
arrayEmployee.forEach((element) => {
    if (element.emp_salary>=50000 ) {
        element.getGreater(); 
    } 
 });

 console.log("*********************Sum of all emp salary ************************");

const totalSalary = arrayEmployee.reduce( (runningTotal, element) => {
    return runningTotal + element.emp_salary;
}, 0);
console.log(totalSalary);

console.log("*********************Avrage salary of all emp ************************");

const avgSalary = arrayEmployee.reduce((rt, element) => {
    return rt+ element.emp_salary;
},0) 
// console.log(`Total Salary is ${avgSalary}, and Number of Students with odd id is ${arrayEmployee.length}`);
console.log(`Average is: ${avgSalary/arrayEmployee.length}`);

console.log(`*****************Emp whoes salary is greater than 75000 and dept 'IT & 'HR'*************`);
arrayEmployee.forEach ((element)=> {
    if (element.emp_salary>75000 && element.emp_dept=='IT' || element.emp_dept=='HR') {
        element.getWork(); 
    } 
 });

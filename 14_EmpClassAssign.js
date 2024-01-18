
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
    getSalary(){
        console.log(` Name: ${this.emp_name}, salary: ${this.emp_salary} , company: ${this.emp_company}`);
    }
    getGreater(){
        console.log(` Name: ${this.emp_name}, salary: ${this.emp_salary} , department: ${this.emp_dept}, company: ${this.emp_company}`);
    }
    getWork(){
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
for (const element of arrayEmployee) {
   element.getDetails();
}
console.log(`*****************Finding all emp working in 'TCS***********************`);
for (const element of arrayEmployee) {
    if (element.emp_company=='TCS') {
        element.getTCS(); 
    } 
 }

 console.log(`*****************Finding all emp working in Finance Departmenet*************`);
 for (const element of arrayEmployee) {
    if (element.emp_dept=='Finance' ) {
        element.getFinance(); 
         } 
 }

 console.log(`*****************Finding Emp whoes start name with ' R'*************`);
 for (const element of arrayEmployee) {
    if (element.emp_name.startsWith('R')  ) {
        element.getNamestartwithR(); 
    } 
 }
 console.log(`*****************Emp whoes salary is greater than 75000'*************`);
 for (const element of arrayEmployee) {
    if (element.emp_salary>75000 ) {
        element.getSalary(); 
    } 
 }
 console.log(`*****************Emp whoes salary is greater than or equal to 50000 from 'IT' dept'*************`);
 for (const element of arrayEmployee) {
    if (element.emp_salary>=50000 && element.emp_dept=='IT') {
        element.getGreater(); 
    } 
 }
 console.log(`*****************Finding all emp working with 'INFY'***********************`);
for (const element of arrayEmployee) {
    if (element.emp_company=='INFY') {
        element.getWork(); 
    } 
 }
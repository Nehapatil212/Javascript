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

console.log(`*****************Get the list of all employee Salary ***********************`);
const salaries = arrayEmployee.map(arrayEmployee => arrayEmployee.emp_salary);
console.log("List of all employee salary:",salaries);
console.log("")


console.log(`*****************Get the list of all employee Salary ***********************`);
const dept = arrayEmployee.map(arrayEmployee => arrayEmployee.emp_dept);
console.log("List of all employee Departments :",dept);
console.log("")

console.log(`*****************Get the list of all employee ID's ***********************`);
const ids = arrayEmployee.map(arrayEmployee => arrayEmployee.emp_id);
console.log("List of all employee ID's :",ids);
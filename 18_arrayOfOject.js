class Student {
    // Data member or properties
    // Constructor
    constructor(id, name, city, marks ){
        this.id = id;
        this.name = name;
        this.city = city;
        this.marks = marks;
    }
    // Member Functions or methods
    getDetails(){
       console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`);
    } 
}

const jenny = new Student(11, 'Jenny', 'Pune', 67);
const bill = new Student(43, 'Bill', 'Mumbai', 96);
const elon = new Student(32, 'Elon', 'Hyd', 83);
const stew = new Student(22, 'Stew', 'Pune', 75);
const ratan = new Student(65, 'Ratan', 'Mumbai', 90);

const arrayStudents = [jenny, bill, elon, ratan, stew];

console.log(`========== WAP to get students of even id============`);
arrayStudents.forEach( (element) => {
    if (element.id%2==0) {
        console.log(element);
    }
} );

const arrayStud = [jenny, bill, elon, ratan, stew];
console.log(`========== WAP to get students of even id============`);
const arrayOfNames = arrayStud.map( (element ) => {
     return element.name;
});
console.log(arrayOfNames);
const arrayStudentsFromPune = arrayStudents.filter( (element) => {
    return element.city=='Pune';
} );
console.log(arrayStudentsFromPune);
arrayStudentsFromPune.forEach(element => {
    console.log(element);
});

console.log(`========= WAP to filter out the second grade( marks >= 55 AND <75 )students  ============`);

arrayStudents.filter( (element)=> { 
    return element.marks>=55 && element.marks<75;
}).map((element) => {
    return element.name;
}).forEach((element)=>{
    console.log(element);
});

const arrayStudents1 = [jenny, bill, elon, ratan, stew];

const totalMarks = arrayStudents1.reduce( (runningTotal, element) => {
    return runningTotal + element.marks;
}, 0);
console.log(totalMarks);

console.log(`====== WAP to find all the students whose id is odd value and find it's marks average========`);
const array = arrayStudents.filter( (element) => {
    return element.id%2!=0;
});

const sumOfMarks = array.reduce((rt, element) => {
    return rt+ element.marks;
},0) 
console.log(`Total marks is ${sumOfMarks}, and Number of Students with odd id is ${array.length}`);
console.log(`Average is: ${sumOfMarks/array.length}`);

array.forEach(element=> {
    console.log(element);
})
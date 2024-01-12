class Vehicle {
    constructor(name, model, year, insurance, colour) {
      this.name = name;
      this.model = model;
      this.year = year;
      this.insurance = insurance;
      this.colour = colour;

    }
  
    displayInfo() {
      console.log(`Name: ${this.name}, Model: ${this.model},Year: ${this.year}, Insurance:  ${this.insurance},Colour: ${this.colour}`);
    }
  }

  const myCar1 = new Vehicle('Toyoto',2012,2014,'3year','black');
//   console.log(myCar1);
  const myCar2 = new Vehicle('Tata',2013,2017,'3year','white');
//   console.log(myCar2);
  myCar1.displayInfo();
  myCar2.displayInfo();
  console.log('**************************************************************************');
  class College {
    constructor(name, location, foundedYear, studentCount) {
      this.name = name;
      this.location = location;
      this.foundedYear = foundedYear;
      this.studentCount = studentCount;
    }
  
    displayInfo() {
      console.log(`College Name: ${this.name}`);
      console.log(`Location: ${this.location}`);
      console.log(`Founded Year: ${this.foundedYear}`);
      console.log(`Student Count: ${this.studentCount}`);
    }
  }
  const myCollege = new College('Pune University', 'Pune', 1950, 2000);
 myCollege.displayInfo();
 console.log('');
 const myCollege1 = new College('Phule University', 'Mumbai', 1960, 1000);
 myCollege1.displayInfo();
  
  console.log("***********Traverse this merge object using loop**************************");
  const traverseObject = ['Fergusson college','Mumbai', 1960, 1000];
  for (const key in traverseObject) {
      if (Object.hasOwnProperty.call(traverseObject, key)) {
          const element = traverseObject[key];
          console.log(`Key ==> ${key}, Value ==> ${element}`);
      }
  }
  console.log('');
  const traverseObject1 = ['Indira college','Mumbai', 1860, 2000];
  for (const key in traverseObject1) {
      if (Object.hasOwnProperty.call(traverseObject1, key)) {
          const element = traverseObject1[key];
          console.log(`Key ==> ${key}, Value ==> ${element}`);
      }
  }
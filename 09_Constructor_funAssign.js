class Bank {
    constructor(bankName, location, ifscCode,branchCode) {
      this.bankName = bankName;
      this.location = location;
      this.ifscCode = ifscCode;
      this.branchCode = branchCode;
    }
  
    displayInfo() {
       
      console.log(`Bank Name: ${this.bankName}`);
      console.log(`Location: ${this.location}`);
      console.log(`IFSC Code: ${this.ifscCode}`);
      console.log(`Branch Code: ${this.branchCode}`);
    }
  }
  
  // Creating an instance of the Bank class
  const myBank = new Bank('YesBank', 'Pune', 22876634,411057);
  
  // Accessing properties and calling the displayInfo method
  myBank.displayInfo();
   console.log('');
  const myBank1 = new Bank('sbiBank', 'Pune', 30876634,411033);
  myBank1.displayInfo(); console.log('');
  const myBank2 = new Bank('mahBank', 'Pune', 87876634,411070);
  myBank2.displayInfo(); console.log('');
  const myBank3 = new Bank('axisBank', 'Pune', 45876634,411040);
  myBank3.displayInfo(); console.log('');

 
// instanceof operator


const pay = new Bank('axisBank', 'Pune', 20876634,411057);
console.log('*************************step 3,4,5********************************************');
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
console.log("Open time of SBI Bank is :",pay.openTime, '  /  ',"Open time of SBI Bank is :",pay.closeTime);

console.log('*************************step 6********************************************');
  
console.log("Open time of Axis Bank is :",pay.openTime, '  /  ',"Open time of SBI Bank is :",pay.closeTime);

console.log('*************************step 7********************************************');

Bank.prototype.bankName4 = "Yes Bank";

Bank.prototype.branchcode4 = "411056";
console.log("Bank Name:",pay.bankName4,' , ',"Branch Code is:",pay.branchcode4,' , ',"Open time  is :",pay.openTime);
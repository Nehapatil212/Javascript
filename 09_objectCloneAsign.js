const bankSbi = {
    bankName: "HDFC",
    branch:"Pune",
    managerName:"Gajanan",
    age:29,
};
const bankLocation = {
    city: "New York",
    street: "USA",
    pin: 122666,
};
const rateOfInterest= {
    homeLoanInterest:" 7.5",
    personalLoanInterest: "6.2",
    dueInterest:"2"
}

console.log("****************Clone object **********************************")
const cloneObj = Object.assign({}, bankSbi,bankLocation );
console.log("Bank SBI: ",bankSbi);
console.log("Bank Location: ",bankLocation);
console.log("Clone Object Assign:",cloneObj);

console.log("*****************Merge object assign**************************************")
const sbiDetails = Object.assign({}, bankSbi,bankLocation ,rateOfInterest);

console.table(sbiDetails);
console.log("***********Traverse this merge object using loop**************************");

for (const key in sbiDetails) {
    if (Object.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}
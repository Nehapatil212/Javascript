var marriageEligibily  = function(gender,age) {
    if (gender =="male" && age>=21)
    {
        console.log( gender,age, "=>This male is eligible to marriage");
    }
    else if (gender =="male" && age<21)
    {
        console.log(gender,age, "=>This male is Not eligible to marriage");
    }
    else if (gender =="female" && age>=18)
    {
        console.log(gender,age, "=>This female is eligible to marriage");
    }
    else if (gender =="female" && age<18)
    {
        console.log(gender,age, "=> This male is Not eligible to marriage");
    }
    else
    {
        if (gender =="other" )
        {
            console.log(gender,age, "=> This is Other Gender Not Allow to marriage");
        }
    } 
}

console.log("*******************Marriage eligibily check*******************")
console.log("");
marriageEligibily("male",17);
marriageEligibily("male",25);
marriageEligibily("female",28);
marriageEligibily("female",16);
marriageEligibily("other",35);
marriageEligibily("other",41);

console.log("*************************************************************")

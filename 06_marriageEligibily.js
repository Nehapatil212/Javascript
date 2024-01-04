var marriageEligibily  = function(gender,age) {
    if (gender =="male" && age>=21)
    {
        console.log("This male is eligible to marriage");
    }
    else if (gender =="male" && age<21)
    {
        console.log("This male is Not eligible to marriage");
    }
    else if (gender =="female" && age>=18)
    {
        console.log("This female is eligible to marriage");
    }
    else if (gender =="female" && age<18)
    {
        console.log("This male is Not eligible to marriage");
    }
    else
    {
        if (gender =="other" )
        {
            console.log("This is Other Gender Not Allow to marriage");
        }
    } 
}
marriageEligibily("male",17);
marriageEligibily("male",25);
marriageEligibily("female",28);
marriageEligibily("female",16);
marriageEligibily("other",35);
marriageEligibily("other",41);

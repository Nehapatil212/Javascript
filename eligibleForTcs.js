var tcsEligibily  = function(gender,age) {
    if (gender =="female" && age>=21)
    {
        console.log( "Congrats, Neha you are eligible for TCS interview");
    }
    else{
        console.log( "Sorry, Jenny you not are eligible for TCS interview");
    }
}
console.log("*******************interview eligibily check*******************")
console.log("");
tcsEligibily("female",27);
tcsEligibily("female",25);
tcsEligibily("female",15);
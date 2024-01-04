function monthOfYear(month){
    switch (month) {
        case 1:
          console.log(`  ${month} ==> January`);
          break;
        case 2:
            console.log(`  ${month} ==> February`);
          break;
        case 3:
            console.log(`  ${month} ==> March`);
          break;
        case 4:
            console.log(`  ${month} ==> April`);
          break;
        case 5:
            console.log(`  ${month} ==> May`);
          break;
        case 6:
            console.log(`  ${month} ==> June`);
          break;
        case 7:
            console.log(`  ${month} ==> July`);
          break;
          case 8:
            console.log(`  ${month} ==> August`);
          break;
          case 9:
            console.log(`  ${month} ==> Suptember`);
          break;
          case 10:
            console.log(`  ${month} ==> October`);
          break;
          case 11:
            console.log(`  ${month} ==> November`);
          break;
          case 12:
            console.log(`  ${month} ==> December`);
          break;
          
        default:
          console.log(` Invalid Input --> Month of year ${month}`);
          break;
      }
}
monthOfYear(2);
monthOfYear(7);
monthOfYear(9);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(undefined);
monthOfYear(null);
monthOfYear(NaN);
monthOfYear(-2);
monthOfYear(15);
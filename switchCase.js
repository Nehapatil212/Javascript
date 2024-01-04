//1  -- Monday
//2  -- Tuesday

//7 -- Sunday
function dayOfTheWeek(dayNum){
    switch (dayNum) {
        case 1:
          console.log(` Day Number ${dayNum} ==> Monday`);
          break;
        case 2:
          console.log(` Day Number ${dayNum} ==> Tuesday`);
          break;
        case 3:
          console.log(` Day Number ${dayNum} ==> Wed`);
          break;
        case 4:
          console.log(` Day Number ${dayNum} ==> Thur`);
          break;
        case 5:
          console.log(` Day Number ${dayNum} ==> Friday`);
          break;
        case 6:
          console.log(` Day Number ${dayNum} ==> Saturday`);
          break;
        case 7:
          console.log(` Day Number ${dayNum} ==> Sunday`);
          break;
        default:
          console.log(` Invalid Input --> Day Number ${dayNum}`);
          break;
      }
}
dayOfTheWeek(2);
dayOfTheWeek(7);
dayOfTheWeek(9);
dayOfTheWeek(null);
dayOfTheWeek(NaN);
dayOfTheWeek(-2);
dayOfTheWeek(0);
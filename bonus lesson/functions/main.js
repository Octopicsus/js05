// TASK SELECTOR

alert("Select number of TASK from 1 - 4");
let taskSelect = input();

//--------------

switch (taskSelect) {
  // -------------------  Task - 01  -------------------

  case 1:
    console.log(" \n ");

    alert("Enter text to be translated into uppercase");
    let myStr = input("str");
    console.log(defUpperStr(myStr));
    break;

  // -------------------  Task - 02  -------------------

  case 2:
    console.log(" \n ");

    alert("Select the array size by number");
    let arrSize = input();
    console.log(evenFn(arrSize));
    break;

  // -------------------  Task - 03  -------------------

  case 3:
    console.log(" \n ");

    alert("Select the day of the week by number");
    let day = input();
    console.log(weekFn(day));
    break;

  // -------------------  Task - 04  -------------------

  case 4:
    console.log(" \n ");

    alert("Select age by number");
    let age = input();
    console.log(ageClassification(age));
    break;

  default:
    console.log("NOT FOUND");
}

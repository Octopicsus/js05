// TASK SELECTOR

alert(description(0));
let taskSelect = input("menu");

//
//--------------

switch (taskSelect) {
  //
  // -------------------  Task - 01  -------------------

  case 1:
    console.log(" \n ");

    alert(description(taskSelect));
    let myStr = input("str");
    console.log(defUpperStr(myStr));
    break;

  //
  // -------------------  Task - 02  -------------------

  case 2:
    console.log(" \n ");

    alert(description(taskSelect));
    let arrSize = input();
    console.log(evenFn(arrSize));
    break;

  //
  // -------------------  Task - 03  -------------------

  case 3:
    console.log(" \n ");

    alert(description(taskSelect));
    let day = input();
    console.log(weekFn(day));
    break;

  //
  // -------------------  Task - 04  -------------------

  case 4:
    console.log(" \n ");

    alert(description(taskSelect));
    let age = input();
    console.log(ageClassification(age));
    break;
}

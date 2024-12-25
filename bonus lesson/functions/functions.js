// -----------------  INPUT CHECKER  -----------------

function input(type = "num") {
  let value;
  switch (type) {
    case "str":
      do {
        value = prompt("Enter text");
      } while (!value || !isNaN(value));
      return value;
    case "num":
      do {
        value = prompt("Enter number");
      } while (!value || isNaN(value));
      return parseFloat(value);
    case "menu":
      do {
        value = prompt("Enter task number");
      } while (!value || isNaN(value) || value < 1 || value > 4);
      return parseInt(value);
  }
}

function description(task) {
  switch (task) {
    case 0:
      return "SELECT TASK  (1 ... 4)";
    case 1:
      return "Enter text to be translated into UPPERCASE";
    case 2:
      return "Select the array COUNT";
    case 3:
      return "Select the DAY of the week";
    case 4:
      return "Select AGE";
  }
}

//
// -------------------  Task - 01  -------------------

function defUpperStr(str = "DEFAULT TEXT") {
  return str.toUpperCase();
}

//
// -------------------  Task - 02  -------------------

function evenFn(countInter) {
  const newArr = [];
  for (let i = 2; i <= countInter; i += 2) {
    newArr.push(i);
  }

  return newArr;
}

//
// -------------------  Task - 03  -------------------

function weekFn(dayNum) {
  switch (dayNum) {
    case 1:
      return "Monday";

    case 2:
      return "Thuesday";

    case 3:
      return "Wednsday";

    case 4:
      return "Thursday";

    case 5:
      return "Friday";

    case 6:
      return "Saturday";

    case 7:
      return "Sunday";

    default:
      return null;
  }
}

//
// -------------------  Task - 04  -------------------

function ageClassification(age) {
  return age < 0 || age > 122
    ? null
    : age <= 24
    ? `${age} -> Childhood`
    : age <= 44
    ? `${age} -> Youth`
    : age <= 65
    ? `${age} -> Maturity`
    : age <= 75
    ? `${age} -> Old age`
    : age <= 90
    ? `${age} -> Longevity`
    : `${age} -> Record`;
}

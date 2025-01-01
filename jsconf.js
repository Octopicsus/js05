function separatorTitle(t) {
  console.log(`\n-------------  ${t}  ------------- \n `.toUpperCase());
}

separatorTitle("E - 01");
//
// ---------------- E - 01 ----------------

function makeAdjective(adjective) {
  return function (string) {
    return adjective + " " + string;
  };
}

let coolifier = makeAdjective("cool");


console.log(coolifier("conference"));

separatorTitle("E - 02");
//
// ---------------- E - 02 ----------------

let rooms = ["H1", "H2", "H3"];
let newRooms = rooms.map(function (rm) {
  if (rm == "H3") {
    return "H4";
  }
});

console.log(newRooms);
console.log(rooms);



function separatorTitle(t) {
  console.log(`\n-------------  ${t}  ------------- \n `.toUpperCase());
}

separatorTitle("task - 01");
//
// ---------------- TASK - 01 ----------------

function countAdd() {
  let count = -1;

  return function (n) {
    if (typeof n === "number") {
      count = n;
    } else {
      count++;
    }
    return count;
  };
}

const counter = countAdd();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter(100)); // 100
console.log(counter()); // 101
console.log(counter()); // 102
console.log(counter(500)); // 500
console.log(counter()); // 501
console.log(counter()); // 502
console.log(counter(0)); // 0
console.log(counter()); // 1 - edited(0)
console.log(counter()); // 2 - edited(1)


separatorTitle("task - 02");
//
// ---------------- TASK - 02 ----------------

function counterFactory() {
  let count = 0;

  return {
    value: function (n) {
      if (typeof n === 'number') {
        count = n;
      }
      return count;
    },
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    }
  };
}

const counterID = counterFactory();

console.log(counterID.value()); // 0
counterID.increment();
counterID.increment();
counterID.increment();
console.log(counterID.value()); // 3
counterID.decrement();
counterID.decrement();
console.log(counterID.value()); // 1
console.log(counterID.value(100)); // 100
counterID.decrement();
console.log(counterID.value()); // 99
console.log(counterID.value(200)); // 200
counterID.increment();
console.log(counterID.value()); // 201

// console.log(counterFactory.value()) // 0
// counterFactory.increment()
// counterFactory.increment()
// counterFactory.increment()
// console.log(counterFactory.value()) // 3
// counterFactory.decrement()
// counterFactory.decrement()
// console.log(counterFactory.value()) // 1
// console.log(counterFactory.value(100)) // 100
// counterFactory.decrement()
// console.log(counterFactory.value()) // 99
// console.log(counterFactory.value(200)) // 200
// counterFactory.increment()
// console.log(counterFactory.value()) // 201

separatorTitle("task - 03");
//
// ---------------- TASK - 03 ----------------

function myPrint(a, b, res) {
  return `${a}^${b}=${res}`;
}

function myPow(a, b, myPrint) {
  function pow(a, b) {
    if (b === 0) return 1;
    if (b < 0) return 1 / pow(a, -b);
    return a * pow(a, b - 1);
  }

  const result = pow(a, b);
  return myPrint(a, b, result);
}

console.log(myPow(3, 4, myPrint)); // 3^4=81
console.log(myPow(2, 3, myPrint)); // 2^3=8
console.log(myPow(2, 0, myPrint)); // 2^0=1
console.log(myPow(2, -2, myPrint)); // 2^-2=0.25

separatorTitle("task - 04");
//
// ---------------- TASK - 04 ----------------

const list = [12, 23, 100, 34, 56, 9, 233];

function myMax(arr) {
  return Math.max.apply(null, arr);
}

console.log(myMax(list)); // 233

separatorTitle("task - 05");
//
// ---------------- TASK - 05 ----------------

function myMul(a, b) {
  return a * b;
}

const myDouble = myMul.bind(null, 2);
const myTriple = myMul.bind(null, 3);

console.log(myDouble(3)); // 6
console.log(myDouble(4)); // 8
console.log(myDouble(5)); // 10

console.log(myTriple(3)); // 9
console.log(myTriple(4)); // 12
console.log(myTriple(5)); // 15

// export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple }
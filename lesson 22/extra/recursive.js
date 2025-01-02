function separatorTitle(t) {
  console.log(`\n-------------  ${t}  ------------- \n `.toUpperCase());
}
function separatorSubTitle(t) {
  console.log(`${t}  --- \n `);
}

//
// --------- EXP - 01 ---------
separatorTitle("exp-01");

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  console.log(`${n - 1}`);
  return n * factorial(n - 1);
}

console.log(`Result: ${factorial(5)}`);

//
// --------- EXP - 02 ---------
separatorTitle("exp-02");

function recursive(a, b) {
  if (b === 0) {
    return 1;
  }
  if (b > 0) {
    return a * recursive(a, b - 1);
  }

  return a / recursive(a, -b);
}

console.log(recursive(2, -3));

//
// --------- EXP - 03 ---------
separatorTitle("exp-03");

function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumTo(n - 1);
}

console.log(sumTo(13));

//
// --------- EXP - 04 ---------
separatorTitle("exp-04");

function fibonacci(f) {
  if (f === 0) {
    return 0;
  }

  if (f === 1) {
    return 1;
  }

  return fibonacci(f - 1) + fibonacci(f - 2);
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));

//
// --------- EXP - 05 ---------
separatorTitle("exp-05");

function sumArr(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArr(arr.slice(1));
}

console.log(sumArr([1, 2, 3, 4, 5]));
console.log(sumArr([10, 20, 30]));
console.log(sumArr([7, -2, 3]));
console.log(sumArr([1]));
console.log(sumArr([]));

//
// --------- EXP - 06 ---------
separatorTitle("exp-06");

function reverseArray(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }
  return [arr[arr.length - 1]].concat(
    reverseArray(arr.slice(0, arr.length - 1))
  );
}

console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray([10, 20, 30]));
console.log(reverseArray([7, -2, 3]));
console.log(reverseArray([1]));
console.log(reverseArray([]));

//
// --------- EXP - 07 ---------
separatorTitle("exp-07");

function sumDigits(n) {
  if (n < 10 && n > -10) {
    return n;
  }
  return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(sumDigits(1234));
console.log(sumDigits(456));
console.log(sumDigits(9));
console.log(sumDigits(100));

//
// --------- EXP - 08 ---------
separatorTitle("exp-08");

function findMax(arr) {
  if (arr.length === 0) {
    return null;
  }

  if (arr.length === 1) {
    return arr;
  }
  let maxNum = findMax(arr.slice(1));
  return arr[0] > maxNum ? arr[0] : maxNum;
}

console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax([10, 20, 30, 40]));
console.log(findMax([-1, -5, -3, -4]));
console.log(findMax([5]));
console.log(findMax([]));

//
// --------- EXP - 09 ---------
separatorTitle("exp-09");

function power(a, b) {
  if (b === 0) {
    return 1;
  }

  if (b > 0) {
    return a * power(a, b - 1);
  }

  return 1 / power(a, -b);
}

console.log(power(2, 3));
console.log(power(5, 0));
console.log(power(3, 4));
console.log(power(7, 2));
console.log(power(2, -3));

//
// --------- EXP - 10 ---------
separatorTitle("exp-10");

function largestPowerOfTwo(n) {
  if (n < 1) {
    return 1;
  }

  if (n % 2 === 0) {
    return largestPowerOfTwo(n / 2) * 2;
  }

  return largestPowerOfTwo(n - 1);
}

console.log(largestPowerOfTwo(10)); // 8 (2^3)
console.log(largestPowerOfTwo(32)); // 32 (2^5)
console.log(largestPowerOfTwo(50)); // 32 (2^5)
console.log(largestPowerOfTwo(7)); // 4 (2^2)
console.log(largestPowerOfTwo(1)); // 1 (2^0)

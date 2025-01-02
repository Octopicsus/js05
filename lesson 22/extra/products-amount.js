function amount(obj) {
  let productAmount = 0;

  for (let brand in obj) {
    for (let product in obj[brand]) {
      productAmount += obj[brand][product].amount;
    }
  }
  return " \nTotal products: \n" + productAmount;
}

function showBrands(obj) {
  let keys = Object.keys(obj).join(", ");

  return " \nBrands in store: \n" + keys;
}

const totalProducts = amount(products);
const totalBrands = showBrands(products);

console.log(totalProducts);
console.log(totalBrands);

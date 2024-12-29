//
// --------------- STORE WINDOW ---------------

separatorTitle("Store Window");

const profuctKeys = Object.keys(brandsPhones);

showBrands();

//
// --------------- SELECTED BRAND ---------------

let product = selectBrand();

separatorTitle("Selected Brand");

showProducts(product);

//
// --------------- SELECTED PRODUCT ---------------

let productNumber = selectProducts(
  product,
  "state - length",
  "Enter the product number you wanna buy"
);

//
// --------------- YOUR CART ---------------

separatorTitle("Your CART");

let selectedProduct = product[productNumber - 1];

let productAmount = selectProducts(
  selectedProduct,
  "state - amount",
  "Enter the product amount you wanna buy"
);

let currencyKeys = Object.keys(currency);
let currencyLength = currencyKeys.length;
let strCurrency = currensyListSymbols();

let askCurrency = typeCurrency();

let currencyPrice = finalPrice(selectedProduct.price, productAmount);

let convertedPrice = convertPrice(currencyPrice);

let currencySymbol = currency[askCurrency].currencySymbol;

showYourCart();

//
// --------------- DISCOUNT ---------------

showDiscount();

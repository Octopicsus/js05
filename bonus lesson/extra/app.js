function separatorTitle(title) {
  console.log(` \n-- ${title} --`.toUpperCase());
}

function showBrands() {
  const profuctKeys = Object.keys(brandsPhones);

  for (let key of profuctKeys) {
    console.log(`
   Brand: ${key}\n
  `);
  }
}

function selectBrand() {
  let selectedBrand;
  do {
    selectedBrand = prompt("Enter the brand you want to buy in");
  } while (false);
  return brandsPhones[selectedBrand];
}

function showProducts(showProductID) {
  for (let i = 0; i < showProductID.length; i++) {
    console.log(`
   ID: #${i + 1}\n
   Phone: ${showProductID[i].name}
   Color: ${showProductID[i].color}
   Storage: ${showProductID[i].storage}GB
   Amount: ${showProductID[i].amount}
   Price: ${showProductID[i].price}$
        `);
  }
}

function selectProducts(body, type, message) {
  let myType;
  switch (type) {
    case "state - length":
      myType = body.length;
      break;
    case "state - amount":
      myType = body.amount;
      break;
  }

  let productNum;
  do {
    productNum = parseInt(prompt(`${message} (1 - ${myType})`));
  } while (productNum < 1 || productNum > myType || isNaN(productNum));
  return productNum;
}

function currensyListSymbols() {
  let currencyArr = [];
  for (let i = 0; i < currencyLength; i++) {
    currencyArr.push(` ${currency[currencyKeys[i]].currencyName}`);
  }
  return currencyArr.toString();
}

function typeCurrency() {
  let myCurrency;
  do {
    myCurrency = prompt(
      "Select payment currency " + strCurrency
    ).toLocaleUpperCase();
  } while (!currencyKeys.includes(myCurrency));

  return myCurrency;
}

function finalPrice(a, b) {
  return a * b;
}

function convertPrice(priceValue) {
  return (priceValue * currency[askCurrency].currencyPrice).toFixed(2);
}

function showYourCart() {
  console.log(` 
   Title: ${selectedProduct.name}\n   x ${productAmount}\n
   Price: ${convertedPrice}${currencySymbol}
  `);
}

function showDiscount() {
  const totalPrice = convertedPrice;
  let discountRate = 0;
  let discountDetected = false;

  if (
    totalPrice >=
    PRICE_TO_GET_DISCOUNT_LV03 * currency[askCurrency].currencyPrice
  ) {
    discountRate = DISCOUNT_LV03;
    discountDetected = true;
  } else if (
    totalPrice >=
    PRICE_TO_GET_DISCOUNT_LV02 * currency[askCurrency].currencyPrice
  ) {
    discountRate = DISCOUNT_LV02;
    discountDetected = true;
  } else if (
    totalPrice >=
    PRICE_TO_GET_DISCOUNT_LV01 * currency[askCurrency].currencyPrice
  ) {
    discountRate = DISCOUNT_LV01;
    discountDetected = true;
  } else {
    discountRate = 0;
  }

  const discount = totalPrice * discountRate;
  const finalPrice = totalPrice - discount;

  if (discountDetected) {
    console.log(
      `   You have dicount: ${discountRate * 100}%
   Discount: ${discount.toFixed(2)}${currencySymbol}\n 
   Total Price: ${finalPrice.toFixed(2)}${currencySymbol}`
    );
  }
}

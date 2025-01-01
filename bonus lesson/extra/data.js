//
// -------------  STORE DATA  -------------

const brandsPhones = {
  Samsung: [
    {
      name: "Galaxy S25 Ultra",
      price: 1399,
      color: "black",
      storage: 999,
      amount: 16,
    },
    {
      name: "Galaxy S25 Plus",
      price: 1099,
      color: "white",
      storage: 512,
      amount: 10,
    },
    { name: "Galaxy S25", price: 999, color: "green", storage: 256, amount: 5 },
  ],
  Apple: [
    {
      name: "iPhone 16 Pro Max",
      price: 1499,
      color: "black",
      storage: 999,
      amount: 19,
    },
    {
      name: "iPhone 16 Pro",
      price: 1099,
      color: "white",
      storage: 256,
      amount: 29,
    },
    {
      name: "iPhone 16",
      price: 899,
      color: "red",
      storage: 256,
      amount: 14,
    },
  ],
  OnePlus: [
    {
      name: "OnePlus 13",
      price: 999,
      color: "black",
      storage: 512,
      amount: 12,
    },
    {
      name: "OnePlus 12",
      price: 899,
      color: "white",
      storage: 512,
      amount: 9,
    },
    { name: "OnePlus 11", price: 799, color: "green", storage: 256, amount: 3 },
  ],
};

//
// -------------  CURRENCY  -------------

const currency = {
  USD: {
    currencyName: "USD",
    currencyPrice: 1.0,
    currencySymbol: "$",
  },
  EUR: {
    currencyName: "EUR",
    currencyPrice: 0.96,
    currencySymbol: "€",
  },
  UAH: {
    currencyName: "UAH",
    currencyPrice: 42.15,
    currencySymbol: "₴",
  },
};

const PRICE_TO_GET_DISCOUNT_LV01 = 5000;
const DISCOUNT_LV01 = 0.03;

const PRICE_TO_GET_DISCOUNT_LV02 = 10000;
const DISCOUNT_LV02 = 0.05;

const PRICE_TO_GET_DISCOUNT_LV03 = 20000;
const DISCOUNT_LV03 = 0.1;

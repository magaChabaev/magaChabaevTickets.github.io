class CurrencyUi {
  constructor() {
    this.currency = document.getElementById("currency");
    this.dictionary = {
      USD: "$",
      EUR: "€",
      RUB: "₽",
    };
  }

  get currencyValue() {
    return this.currency.value;
  }

  getCurrencySymbol() {
    return this.dictionary[this.currencyValue];
  }
}

const currencyUi = new CurrencyUi();

export default currencyUi;

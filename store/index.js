export const state = () => ({
  price: 200,
  product: "Велосипед",
  months: 1,
  times: 0,
  frequency: 30,
  salePrice: 1,
  seasons: 1,
  result: 0,
});

export const mutations = {
  setProductName(state, product) {
    state.product = product;
  },
  setPrice(state, price) {
    state.price = price;
  },
  setMonths(state, months) {
    state.months = months;
  },
  setFrequency(state, frequency) {
    state.frequency = frequency;
  },
  setSalePrice(state, price) {
    state.salePrice = 1 - price / 100;
  },
  setSeason(state, season) {
    state.seasons = season;
  },
  setResult(state) {
    state.times = state.months * state.frequency * state.seasons;
    state.result = ((state.price * state.salePrice) / state.times).toFixed(2);
  },
};

export const getters = {
  getProductName(state) {
    return state.product;
  },
  getPrice(state) {
    return state.price;
  },
  getTimes(state) {
    return state.times;
  },
  getResult(state) {
    return state.result;
  },
};

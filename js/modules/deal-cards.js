const dealCards = (arr) => {
  const state = {
    sam: [arr.shift(), arr.shift()],
    dealer: [arr.shift(), arr.shift()],
  };
  return state;
};

const dealOneCard = arr => arr.shift();

export { dealCards, dealOneCard };

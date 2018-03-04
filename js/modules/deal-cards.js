const dealCards = (arr) => {
  const playerCards = {
    sam: [arr.shift(), arr.shift()],
    dealer: [arr.shift(), arr.shift()],
  };
  return playerCards;
};

const dealOneCard = arr => arr.shift();

export { dealCards, dealOneCard };

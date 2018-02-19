const dealCards = (arr) => {
  const state = {
    sam: [arr[0], arr[2]],
    dealer: [arr[1], arr[3]],
  };
  return state;
};

export default dealCards;

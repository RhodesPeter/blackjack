const hasWon = (sam, dealer) => {
  if ((sam === 21 && dealer === 21) || (sam > 21 && dealer > 21)) {
    return "It's a draw";
  } else if (sam > 21) {
    return "Sam's total is greater than 21, Dealer wins!";
  } else if (dealer > 21) {
    return "Dealers's total is greater than 21, Sam wins!";
  } else if (sam === 21) {
    return 'Sam wins!';
  } else if (dealer === 21) {
    return 'Dealer wins!';
  } else if (sam >= 17 && dealer > sam) {
    return 'Dealer wins!';
  }
  return false;
};

export default hasWon;

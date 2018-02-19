const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
const suits = ['Heart', 'Diamonds', 'Spades', 'Clubs'];
const createDeck = () => suits.map(value => values.map(suit => `${suit} ${value}`));
const shuffle = () => createDeck().reduce((a, b) => a.concat(b)).sort(() => Math.random() - 0.5);

export default shuffle;

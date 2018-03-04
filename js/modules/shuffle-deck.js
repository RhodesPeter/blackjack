const shuffle = deck => deck.reduce((a, b) => a.concat(b)).sort(() => Math.random() - 0.5);

export default shuffle;

const score = {
  J: 10,
  K: 10,
  Q: 10,
  A: 11,
};

const totaliser = (cards) => {
  const mapped = cards.map(a => a.split(' ')[0]);
  return mapped.reduce((a, b) => (score[a] || Number(a)) + (score[b] || Number(b)), 0);
};

export default totaliser;

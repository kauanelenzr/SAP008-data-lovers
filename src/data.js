
export const filterData = (data, prop, name) => {
  if (typeof data !== "object" || typeof prop !== "string" || typeof name !== "string") {
    throw new TypeError
  }

  const filter = data.filter(obj => obj[prop] === name)
  return filter;
};

export const computeStats = (data, key, value) => {
  let qtd = data.reduce((total, valor) => {
    if (valor[key] === value) {
      return total + 1;
    }
    return total;
  }, 0);
  return Number((qtd * 100 / data.length).toFixed(2));
}

const choice = (items) => {
  const randIndex = Math.floor(Math.random() * items.length);
  return items[randIndex];
};

const remove = (items, item) => {
  const index = items.indexOf(item);
  if (index !== -1) {
    items.splice(index, 1);
    return items;
  }

  return undefined;
};

export { choice, remove };

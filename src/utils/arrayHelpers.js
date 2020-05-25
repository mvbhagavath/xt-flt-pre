const sortArray = (array = [], key, order) =>
  array.sort((item1, item2) => order * (item1[key] - item2[key]));

export { sortArray };

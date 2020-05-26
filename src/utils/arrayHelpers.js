/**
 * sortArray - method to sort array of objects based on an object key
 * @param {Array} array
 * @param {String} key
 * @param {Number} order 1 denotes ascending order and -1 denotes descending
 * @returns {Array} sorted array
 */
const sortArray = (array = [], key, order) =>
  array.sort((item1, item2) => order * (item1[key] - item2[key]));

export { sortArray };

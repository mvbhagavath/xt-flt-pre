/**
 * addRemoveFilter - method to add or remove an item from the set filters.
 * @param {Object} currFilters 
 * @param {String} category 
 * @param {String} value
 * @returns {Object} updatedFilter 
 */
const addRemoveFilter = (currFilters, category, value) => {
  const filterIndex = currFilters[category].findIndex((item) => item === value);
  filterIndex >= 0
    ? currFilters[category].splice(filterIndex, 1)
    : currFilters[category].push(value);
  return currFilters;
};

/**
 * generateQueryParams - method to prepare the params to be appeneded to query for api call
 * @param {Object} paramObj
 * @returns {String} params in the form of key value pair seperated by '|'
 */
const generateQueryParams = (paramObj) =>
  Object.keys(paramObj).reduce(
    (query, category) =>
      paramObj[category].length > 0
        ? `${query}${category}=${paramObj[category]
            .toString()
            .toLowerCase()
            .replace(/,/g, "|")}&`
        : query,
    ""
  );
export { addRemoveFilter, generateQueryParams };

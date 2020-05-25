const addRemoveFilter = (currFilters, category, value) => {
  const filterIndex = currFilters[category].findIndex((item) => item === value);
  filterIndex >= 0
    ? currFilters[category].splice(filterIndex, 1)
    : currFilters[category].push(value);
  return currFilters;
};

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

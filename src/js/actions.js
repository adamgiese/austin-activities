export const changeFilter = (filter, value) => (
  {
    type: 'CHANGE_FILTER',
    filter,
    value,
  }
);

export const toggleFilters = () => (
  {
    type: 'TOGGLE_FILTERS',
  }
);

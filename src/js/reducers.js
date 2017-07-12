const handleActions = (state = [], action) => {
  const newFilter = { ...state.filters, [action.filter]: action.value };
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, filters: newFilter };
    case 'TOGGLE_FILTERS':
      return { ...state, filterToggle: !state.filterToggle };
    default:
      return state;
  }
};
export default handleActions;

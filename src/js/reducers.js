const handleActions = (state = [], action) => {
  const newFilter = { ...state.filters, [action.filter]: action.value };
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, filters: newFilter };
    default:
      return state;
  }
};
export default handleActions;

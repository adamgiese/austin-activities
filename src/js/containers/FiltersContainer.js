import { connect } from 'react-redux';
import { changeFilter, toggleFilters } from '../actions';
import Filters from '../components/Filters.jsx';

const mapStateToProps = state => ({
  filters: state.filters,
  filterToggle: state.filterToggle,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: (filter, value) => {
    dispatch(changeFilter(filter, value));
  },
  onToggleFilters: () => {
    dispatch(toggleFilters());
  },
});

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

export default FiltersContainer;

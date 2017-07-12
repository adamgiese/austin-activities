import { connect } from 'react-redux';
import { changeFilter } from '../actions';
import Filters from '../components/Filters.jsx';

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: (filter, value) => {
    dispatch(changeFilter(filter, value));
  },
});

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

export default FiltersContainer;

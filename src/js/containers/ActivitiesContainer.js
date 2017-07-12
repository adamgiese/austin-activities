import { connect } from 'react-redux';
import Activities from '../components/Activities.jsx';
import activities from '../data/activities';

const mapStateToProps = state => ({
  filters: state.filters,
  activities: activities.filter((activity) => {
    let filtered = false;
    Object.keys(state.filters).forEach(
      (filter) => {
        if (activity[filter] !== state.filters[filter] && state.filters[filter] !== 'all') {
          filtered = true;
        }
      }
    );
    return !filtered;
  }),
});

const ActivitiesContainer = connect(
  mapStateToProps,
)(Activities);

export default ActivitiesContainer;

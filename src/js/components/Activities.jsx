/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const Activities = (props) => {
  const activities = props.activities.map(
    activity => (
      <li className='activity'>
        {activity.name}
        <a className='activity-link' href={activity.link} target='_blank'>Visit Site</a>
      </li>
    )
  );
  return (
    <ul className='activities'>{activities}</ul>
  );
};

export default Activities;

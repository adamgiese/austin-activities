/* eslint-disable no-unused-vars */
import React from 'react';
import TernarySwitch from './TernarySwitch';
/* eslint-ensable no-unused-vars */

const Filters = props => (
  <div className='filters'>
    <TernarySwitch
      label='Active'
      name='active'
      filterValue={props.filters.active}
      onChange={props.onChangeFilter}
    />
    <TernarySwitch
      label='Sitter'
      name='sitter'
      filterValue={props.filters.sitter}
      onChange={props.onChangeFilter}
    />
    <TernarySwitch
      label='21+?'
      name='21+'
      filterValue={props.filters['21+']}
      onChange={props.onChangeFilter}
    />
  </div>
);

export default Filters;

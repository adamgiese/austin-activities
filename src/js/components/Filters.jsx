/* eslint-disable no-unused-vars */
import React from 'react';
import TernarySwitch from './TernarySwitch';
/* eslint-ensable no-unused-vars */

const Filters = (props) => {
  const filters = props.filterToggle ?
    <div className='filters--modal'>
      <button className="filters--close" onClick={() => { props.onToggleFilters(); }}>Close Filters</button>
      <div className='filters--overlay' onClick={() => { props.onToggleFilters(); }}></div>
      <div className='filters--content'>
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
    </div> : '';
  return (
    <div className='filters-container'>
      <button className='filters--open' onClick={() => { props.onToggleFilters(); }}>Open Filters</button>
      { filters }
    </div>
  );
};

export default Filters;

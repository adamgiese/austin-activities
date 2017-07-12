/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const TernarySwitch = props => (
  <fieldset className='ternary-switch'>
    <legend>{props.label}</legend>
    <div className='ternary-switch-container'>
      <label>
        <input
          className='ternary-switch-input'
          type='radio'
          name={props.name}
          value='true'
          checked={props.filterValue === 'true'}
          onClick={event => props.onChange(props.name, event.target.value)}
        />
        <span className='ternary-switch-label'>Yes</span>
      </label>
      <label>
        <input
          className='ternary-switch-input'
          type='radio'
          name={props.name}
          value='false'
          checked={props.filterValue === 'false'}
          onClick={event => props.onChange(props.name, event.target.value)}
        />
        <span className='ternary-switch-label'>No</span>
      </label>
      <label>
        <input
          className='ternary-switch-input'
          type='radio'
          name={props.name}
          value='all'
          checked={props.filterValue === 'all'}
          onClick={event => props.onChange(props.name, event.target.value)}
        />
        <span className='ternary-switch-label'>All</span>
      </label>
    </div>
  </fieldset>
);

export default TernarySwitch;

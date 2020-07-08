import React from 'react'

export default function Selector(props) {
  return (
    <>
      <label>Choose search criterion</label>
      <select 
        id='searchCriterion'
        onChange={props.handleUpdateSelector}
      >
        <option value='people'>people</option>
        <option value='starships'>starships</option>
        <option value='vehicles'>vehicles</option>
        <option value='planets'>planets</option>
        <option value='films'>films</option>
        <option value='species'>species</option>
      </select>
    </>
  )
}
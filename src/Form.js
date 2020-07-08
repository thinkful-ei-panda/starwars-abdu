import React from 'react'
import Selector from './Selector'

export default function Form(props) {
  return (
    <form 
      onSubmit = { props.handleNameSubmit}
    >
      <fieldset>
        <label htmlFor='characterName'>
          Enter query
        </label>

        <input 
          name='characterName' 
          id='characterName'
          onChange={props.handleUpdateNameField}
        ></input>
        <Selector handleUpdateSelector={props.handleUpdateSelector}/>
        <button type='submit'>Enter</button>
        
      </fieldset>
    </form>
  )
}
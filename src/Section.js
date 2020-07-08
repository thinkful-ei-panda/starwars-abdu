import React from 'react'

export default class Section extends React.Component {
  
  render () {
    console.log(this.props.results)
  const results = this.props.results.map ( (item, i) => {
    return (
      <li key={i}>
        {item.name}
      </li>
    )
  })
  return (
    <ul>
      {results}
    </ul>
  )
  }
}
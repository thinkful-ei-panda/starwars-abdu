import React from 'react'
import Header from './Header'
import Form from './Form'
import Section from './Section'
//import './App.css'

class App extends React.Component {
  
  state = {
    names: [],
    nameField: {
      value:'',
      touched:false
    },
    selector: {
      value: 'people',
      touched:false
    }
  }

  handleNameSubmit = (e) => {
    e.preventDefault()
    const name = this.state.nameField.value
    const selection = this.state.selector.value
    fetch(`https://swapi-thinkful.herokuapp.com/api/${selection}/?search=${name}`,{
      method: 'GET'
    })
    .then(response => response.json())
    .then((result) => {
      this.setState({names: result.results})
    })
  }

  handleUpdateNameField = (e) => {
    let newNameField = this.state.nameField
    newNameField.value = e.target.value
    newNameField.touched = true
    this.setState({nameField: newNameField});
  }

  handleUpdateSelector = (e) => {
    console.log('selector selected')
    let newSelector = this.state.selector
    newSelector.value = e.target.value
    newSelector.touched = true
    this.setState({selector: newSelector})
  }

  render () {
    return (
      <div className="App">
        <Header />
        <main>
          <Form 
            handleNameSubmit = { e => this.handleNameSubmit(e) }
            handleUpdateNameField = { e => this.handleUpdateNameField(e) }
            handleUpdateSelector = {e => this.handleUpdateSelector(e)}
          />
          <Section results =  {this.state.names } />
        </main>
      </div>
    )
  }
}

export default App;
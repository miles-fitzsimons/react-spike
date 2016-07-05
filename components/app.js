import React, { Component } from 'react'
import Greeter from './greeter'
import Counter from './counter'
import ChangeName from './change-name'

class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
  	console.log('APP', this.props)
  	console.log('BBPP', this.state)
    return (
    	<div>
	    	<h1>Welcome to {this.props.name}</h1>
	    	<ChangeName />
	    	<Counter />

	    </div>
    	)
  }
}

export default App

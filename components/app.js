import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
    	<div>
	    	<h1>Welcome to {this.props.name}</h1>
	    	<Greeter name="Marcus"/>
	    	<Counter />
	    </div>
    	)
  }
}

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {count: 0}
	}
	increaseCount() {
		this.setState({count: this.state.count + 1})
	}
	decreaseCount() {
		this.setState({count: this.state.count - 1})
	}
	render() {
		return (
			<div>
				<h3>My count is: {this.state.count}</h3>
				<button onClick={this.increaseCount.bind(this)}>Increase</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button onClick={this.decreaseCount.bind(this)}>Decrease</button>
			</div>
			)
	}
}

class Greeter extends Component {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<h2>Hi {this.props.name}</h2>
			)
	}
}

export default App

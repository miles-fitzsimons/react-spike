import React, { Component } from 'react'

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
				<br /><br />
				<button onClick={this.decreaseCount.bind(this)}>Decrease</button>
			</div>
			)
	}
}

export default Counter

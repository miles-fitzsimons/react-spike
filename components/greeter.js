import React, { Component } from 'react'

class Greeter extends Component {
	constructor(props) {
		super(props)
		// this.state 
	}
	render () {
		return (
			<div>
				<h2>Hi {this.props.name}</h2>
			</div>
			)
	}
}

export default Greeter

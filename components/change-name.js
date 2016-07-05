import React, { Component } from 'react'
import Greeter from './greeter'

class ChangeName extends Component {
	constructor(props) {
		super(props)
		this.state = {name: 'Miles', value: ''}
	}
	onChange(e) {
		console.log(e.target.value)
		this.setState({value: e.target.value})
	}
	updateName(e) {
		console.log("A", e)
		this.setState({name: this.state.value})
	}
	render() {
		return (
			<div>
				<Greeter name={this.state.name}/>
				<form>
					<input type="text" onChange={this.onChange.bind(this)} />
					<button type="button" onClick={this.updateName.bind(this)}>Change Name</button>
				</form>
			</div>
			)
	}
}

export default ChangeName
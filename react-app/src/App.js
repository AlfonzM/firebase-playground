import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {
	constructor() {
		super();

		this.state = {
			name: ''
		};
	}
	componentDidMount() {
		const rootRef = firebase.database().ref().child('object');
		const nameRef = rootRef.child('name');
		nameRef.on('value', snap => {
			this.setState({
				name: snap.val()
			})
		});
	}
	render() {
		return (
			<div>
				<h1>Hello</h1>
				name: {this.state.name}
			</div>
		);
	}
}

export default App;

import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';

class App extends Component {

	getUser = (e) => {
		e.preventDefault();
		const user = e.target.element.username.value;
		console.log(user);
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Github</h1>
				</header>
				<UserForm getUser={this.getUser}/>
			</div>
		);
  	}
}

export default App;
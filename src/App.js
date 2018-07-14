import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import axios from 'axios';

class App extends Component {

	state = {
		repos: null
	}

	getUser = (e) => {
		e.preventDefault();
		const user = e.target.elements.username.value;

		if (user) { 	// Prevent user from clicking the button
			axios.get(`https://api.github.com/users/${user}`)
			.then( res => {
				const repos = res.data.public_repos;
				this.setState({ repos: repos })
				console.log(repos)
			})
		} else return;
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">Welcome to Github</h1>
				</header>
				<UserForm getUser={this.getUser}/>

				{ this.state.repos ? <p>Number of repos: {this.state.repos} </p>
					: <p>Please enter a Github username.</p>
				}
			</div>
		);
  	}
}

export default App;

import logo from './sources/logo.png';
import './App.css';

import React, { Component } from 'react';


class App extends Component {
	render() {
		return (
			<div>
				<h1 align='center'>Normovanie porcií stravy v školsej jedálni</h1>
				<div class="login">				
				<fieldset>
					<legend>Prihlásenie</legend>
					<img src={logo}></img>
					Prístupový kód: <input type='password' name='txtPasswd'></input>
					<button>Prihlásiť</button>
				</fieldset>
				</div>
			</div>

		);
	}
}

export default App;

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
					<img src={logo}></img><br></br>
					Login: <input type='text' name='txtLogin'></input><br></br>
					Heslo: <input type='text' name='txtPasswd'></input>
				</fieldset>
				</div>
			</div>

		);
	}
}

export default App;

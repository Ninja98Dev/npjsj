import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import logo from './sources/logo.png';

import { Menu } from './App/menu.js';

let incorrect = false;

function LogIn() {
	if (document.querySelector('#txtPasswd').value == "123")
	{
		root.render(<Menu />);
	}
	else
	{
		incorrect = true;
		root.render(<Login />);
	}
}
function logOk() {
	if (incorrect)
		return (<b><font color="red">Nesprávny kód!</font></b>);
	return null;
}
export function LogOut(){
	incorrect = false;
	root.render(<Login />);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Login />
);

function Login(props){
	return (<div>
				<h1 align='center'>Normovanie porcií stravy v školsej jedálni</h1>
				<div class="login">				
				<fieldset>
					<legend>Prihlásenie</legend>
					<img src={logo}></img>
					Prístupový kód: <input type='password' id='txtPasswd'></input>
					{logOk()}<button onClick={() => LogIn()}>Prihlásiť</button>
				</fieldset>
				</div>
			</div>);
}




reportWebVitals();

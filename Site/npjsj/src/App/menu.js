import './menu.css';
import logo from '../sources/logoDark.png'
import { LogOut } from '../index.js' 

export function Menu() {
	return (
		<div>
			<nav>
				<img src={logo} width="35" height="50"></img>
				<button onClick={LogOut} id="logOutButton">Odhlásiť</button>
			</nav>
			
			<table align="center" id="mainMenuNavig">
				<tr>
					<td><button id="navigButton" onClick='window.open("foodSelect.htm", "_self");'>Výber jedla</button></td>
					<td><button id="navigButton" onClick='window.open("editor.htm", "_self");'>Úprava noriem</button></td>
				</tr>
				<tr>
					<td><button id="navigButton" onClick='window.open("statistics.htm", "_self");'>Štatistika</button></td>
				</tr>
			</table>
		</div>
	);
}

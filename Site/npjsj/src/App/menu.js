import logo from '../sources/logoDark.png'
import { LogOut, renderFoodSelector, renderEdit, renderStatistics } from '../index.js' 

export function Menu() {
	return (
		<div class="topPanel">
			<nav>
				<img src={logo} width="35" height="50"></img>
				<button onClick={LogOut} id="logOutButton">Odhlásiť</button>
			</nav>
			
			<table align="center" id="mainMenuNavig">
				<tr>
					<td><button id='navigButton' onClick={renderFoodSelector}>Výber jedla</button></td>
					<td><button id="navigButton" onClick={renderEdit}>Úprava noriem</button></td>
				</tr>
				<tr>
					<td><button id="navigButton" onClick={renderStatistics}>Štatistika</button></td>
				</tr>
			</table>
		</div>
	);
}
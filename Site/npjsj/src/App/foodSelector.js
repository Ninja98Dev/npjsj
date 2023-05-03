import { renderMenu, renderFoodSelector } from '../index.js'

let currentTab = 0;

export function FoodSelector() {
	return (
		<div class='elements'>
			<nav>
				<button id='backButton' onClick={renderMenu}>←</button>
			</nav>
			<button id='tabButton' onClick={() => switchTab(0)}>Materská škola</button>
			<button id='tabButton' onClick={() => switchTab(1)}>Stredná škola</button>
			<fieldset>
				{tab()}
			</fieldset>
		</div>
	);
}
function switchTab(tab){
	currentTab = tab;
	renderFoodSelector();
}
function tab() {
	if (currentTab == 0)
	{
		return ( <b>MŠ</b> );
	}
	else
	{
		return ( <b>SŠ</b> );
	}
}
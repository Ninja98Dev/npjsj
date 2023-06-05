import { renderMenu, renderFoodSelector } from '../index.js'

class TAB {
	constructor() {
		this.tablings = [];
	}
	content() {
		return ( 
		<div class="foodTabs">
			<table>
				<tr>
					<td>
						{this.tablings[0].content()}
					</td>
					<td>
						{this.tablings[1].content()}
					</td>
					<td>
						{this.tablings[2].content()}
					</td>
				</tr>
				<tr>
					<td>
						{this.tablings[3].content()}
					</td>
					<td>
						{this.tablings[4].content()}
					</td>
					<td>
						{this.tablings[5].content()}
					</td>
				</tr>
			</table>
		</div> 
		);
	}
}
class TABLING {
	constructor(name) {
		this.name = name;
		this.foodLines = [];
	}
	content() {
		if (this.name == "") return (<div></div>);
		else
		return (
		<div>
			<fieldset>
				<legend>{this.name}</legend>
				{this.elementLines()}
				<button style={{right: 5, width: 25, backgroundColor: "green", color: "lightgreen", fontSize: 18, height: 22}} onClick={() => addFood(this)}>+</button>
			</fieldset>
			
		</div>
		);
	}
	elementLines() {
		const returnable = [];
		for (let i = 0; i < this.foodLines.length; i++)
		{
			returnable.push(this.foodLines[i].content());
			returnable.push(<hr style={{marginTop: 0}}></hr>);
		}
		return returnable;
	}
}
class FoodTab {
	constructor(name) {
		this.name = name;
	}
	content() {
		return (
		<div>
			{this.name}
		</div>
		);
	}
}
let tabMS = new TAB();
tabMS.tablings = [new TABLING("Raňajky"), new TABLING("Desiata"), new TABLING("Obed"), new TABLING(""), new TABLING("Olovrant"), new TABLING("Večera")];
let tabSS = new TAB();
tabSS.tablings = [new TABLING("Raňajky"), new TABLING("Desiata"), new TABLING("Obed 1"), new TABLING("Obed 2"), new TABLING("Olovrant"), new TABLING("Večera")];
let currentTab = tabMS;


export function FoodSelector() {
	return (
		<div class='elements'>
			<nav>
				<button id='backButton' onClick={renderMenu}>←</button>
				<button style={{backgroundColor: currentColor(tabMS)}} id='tabButton' onClick={() => switchTab(tabMS)}>Materská škola</button>
				<button style={{backgroundColor: currentColor(tabSS)}} id='tabButton' onClick={() => switchTab(tabSS)}>Stredná škola</button>
			</nav>

			<fieldset id="foodSelField">
				{currentTab.content()}
			</fieldset>
		</div>
	);
}
function currentColor(num) {
	if (currentTab == num)
		return "lightskyblue";
	else
		return "steelblue";
}
function switchTab(tab){
	currentTab = tab;
	renderFoodSelector();
}
function addFood(tabling) {
	tabling.foodLines.push(new FoodTab("nejake jedlo"));
	renderFoodSelector();
}

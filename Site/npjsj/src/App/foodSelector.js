import { renderMenu } from '../index.js'

export function FoodSelector() {
	return (
		<div class='elements'>
			<button id='backButton' onClick={renderMenu}>←</button>
			<h1 align='center'>Výber jedla</h1>
		</div>
	);
}

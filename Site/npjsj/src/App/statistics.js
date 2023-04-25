import { renderMenu } from '../index.js'

export function Statistics() {
	return (
		<div class='elements'>
			<button id='backButton' onClick={renderMenu}>←</button>
			<h1 align='center'>Štatistika</h1>
		</div>
	);
}

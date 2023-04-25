import { renderMenu } from '../index.js'

export function Edit() {
	return (
		<div class='elements'>
			<button id='backButton' onClick={renderMenu}>←</button>
			<h1 align='center'>Úprava noriem</h1>
		</div>
	);
}

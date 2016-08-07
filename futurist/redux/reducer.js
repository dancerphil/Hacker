
const initialState = {
	glyphs: [
		{a: {
			i: 0,
			j: 3,
			score: 0
		},
		b: {
			i: 9,
			j: 3,
			score: 0
		}}
	],
	text: 'Hello'
}
function myApp(state = initialState, action) {
	switch (action.type) {
		case 'CHANGE_TEXT':
			return {
				text:state.text=='Hello'?'Stark':'Hello'
			}
		case 'BUTTON_CLICK':
			return {
				text: 'You just click button'
			}
		default:
			return {
				glyphs: state.glyphs,
				text: 'Hello'
			};
	}
}

export default myApp;
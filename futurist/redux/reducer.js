
const initialState = {
	glyphs: [{
		a: { i: 0, j: 3, score: 0 }, //simple
		b: { i: 9, j: 3, score: 0 }  //complex
	},{
		a: { i: 0, j: 0, score: 0 }, //gain
		b: { i: 9, j: 3, score: 0 }
	},{
		a: { i: 2, j: 0, score: 0 }, //past
		b: { i: 9, j: 3, score: 0 }
	},{
		a: { i: 3, j: 0, score: 0 }, //destroy
		b: { i: 0, j: 1, score: 0 }  //create
	},{
		a: { i: 4, j: 0, score: 0 }, //live
		b: { i: 9, j: 3, score: 0 }
	},{
		a: { i: 5, j: 0, score:-1 }, //civilization
		b: { i: 0, j: 2, score: 1 }  //nature
	},{
		a: { i: 6, j: 0, score: 0 }, //defend
		b: { i: 3, j: 2, score: 0 }  //attack
	}],
	dynamicState: {
		index: 0,
		type: 'question',
		length: 2
	}
}
function myApp(state = initialState, action) {
	let tempState = state;
	switch (action.type) {
		case 'NEXT':
			tempState.dynamicState.index += 1;
			tempState.dynamicState.type = 'question';
			return {
				glyphs: state.glyphs,
				dynamicState: tempState.dynamicState
			}
		case 'ANSWER':
			tempState.dynamicState.type = 'answer';
			return {
				glyphs: state.glyphs,
				dynamicState: tempState.dynamicState
			}
		default:
			tempState.dynamicState.length = state.glyphs.length
			return {
				glyphs: state.glyphs,
				dynamicState: state.dynamicState
			};
	}
}

export default myApp;
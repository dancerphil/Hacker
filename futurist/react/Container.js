import React from 'react';
import Hello from './Hello'
import Change from './Change'
import IconCouple from './IconCouple'

class Container extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const { actions, state } = this.props;
		console.log(state.dynamicState.length)
		return (
			<div>
				<IconCouple glyphs={state.glyphs[state.dynamicState.index]} />
				<Hello actions={actions} index={state.dynamicState.index} />
				<Change actions={actions} />
			</div>
		);
	}
}
export default Container;
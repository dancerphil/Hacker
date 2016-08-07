import React from 'react';
import Hello from './Hello'
import Change from './Change'
import IconCouple from './IconCouple'

class Container extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const { actions, state} = this.props;
		return (
			<div>
				<IconCouple glyphs={state.glyphs[0]} />
				<Hello actions={actions} text={state.text} />
				<Change actions={actions} />
			</div>
		);
	}
}
export default Container;
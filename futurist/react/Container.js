import React from 'react';
import Hello from './Hello'
import Change from './Change'

class Container extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const { actions, state} = this.props;
		return (
			<div>
				<Hello actions={actions} text={state.text}/>
				<Change actions={actions}/>
			</div>
		);
	}
}
export default Container;
import React from 'react';
class Change extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		const {actions} = this.props;
		actions.next();
	}

	render() {
		return (
			<button onClick={this.handleClick} >change</button>
		);
	}
}
export default Change;
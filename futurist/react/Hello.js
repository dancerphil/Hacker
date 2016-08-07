import React from 'react';
class Hello extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		const {actions} = this.props;
		actions.changeText();
	}

	render() {
		return (
			<h1 onClick={this.handleClick}> {this.props.text} </h1>
		);
	}
}
export default Hello;
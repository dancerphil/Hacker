import React from 'react';
class Hello extends React.Component{
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		const {actions} = this.props;
	}

	render() {
		return (
			<h1 onClick={this.handleClick}> {this.props.index} </h1>
		);
	}
}
export default Hello;
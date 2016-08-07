import React from 'react';
class Icon extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const { glyph } = this.props;
		return (
			<div className={'icon i' + glyph.i + 'j' + glyph.j}></div>
		);
	}
}
export default Icon;
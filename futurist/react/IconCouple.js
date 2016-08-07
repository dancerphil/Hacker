import React from 'react';
import Icon from './Icon'
class IconCouple extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		const { glyphs } = this.props;
		return (
			<div>
				<Icon glyph={glyphs.a} />
				<Icon glyph={glyphs.b} />
			</div>
		);
	}
}
export default IconCouple;
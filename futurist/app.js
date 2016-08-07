import React from 'react';
import {render} from 'react-dom';
import { bindActionCreators } from 'redux';
import { Provider ,connect} from 'react-redux';
import store from './redux/store'
import * as Actions from './redux/actions';
import Container from './react/Container'

class App extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const { actions, state} = this.props;
		return (
			<Container actions={actions} state={state} />
	);
	}
}

function mapStateToProps(state) {
	return { state: state }
}

function mapDispatchToProps(dispatch){
	return{
		actions : bindActionCreators(Actions,dispatch)
	}
}

App = connect(mapStateToProps,mapDispatchToProps)(App)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
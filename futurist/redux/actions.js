import { createAction } from 'redux-actions';

const changeText =
	createAction('CHANGE_TEXT');

const buttonClick =
	createAction('BUTTON_CLICK');

export {
	changeText,
	buttonClick
};
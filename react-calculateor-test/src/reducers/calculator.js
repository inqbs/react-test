import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
	inputValue: 0,
	resultValue: 0,
	showingResult: false,
};

const calculator = (state = initialAppState, action) => {

	switch (action.type) {
		case actionTypes.INPUT_NUMBER:
			state = {
				...state,
				inputValue: state.inputValue * 10 + action.number,
				showingResult: false,
			}
			break;
		case actionTypes.PLUS:
			state = {
				...state,
				inputValue: 0,
				resultValue: state.resultValue + state.inputValue,
				showingResult: true,
			}
			break;
		default:
	}

	return state;
};

export default calculator;
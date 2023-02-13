import { useReducer } from "react";
import UIContext from "./Context";

const initialState = {
	timeColor: "#FFF",
	buttons: {
		sound: false,
		time: false,
		date: false,
	},
};

const uiReducer = (state, action) => {
	if (action.type === "CHANGE") {
		return {
			...state,
			timeColor: action.payload,
		};
	}

	if (action.type === "ACTIVATE") {
		return {
			...state,
			buttons: {
				...state.buttons,
				[action.payload]: !state.buttons[action.payload],
			},
		};
	}

	return state;
};

const UIProvider = ({ children }) => {
	const [uiState, dispatch] = useReducer(uiReducer, initialState);

	const changeColor = (color) => {
		dispatch({ type: "CHANGE", payload: color });
	};

	const activateButton = (name) => {
		dispatch({ type: "ACTIVATE", payload: name });
	};

	const value = {
		timeColor: uiState.timeColor,
		changeColor: changeColor,
		activateButton: activateButton,
		buttons: uiState.buttons,
	};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIProvider;

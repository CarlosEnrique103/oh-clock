import { useReducer } from "react";
import UIContext from "./Context";

const initialState = {
	timeColor: "#FFF",
};

const uiReducer = (state, action) => {
	if (action.type === "CHANGE") {
		return {
			timeColor: action.payload,
		};
	}

	return state;
};

const UIProvider = ({ children }) => {
	const [uiState, dispatch] = useReducer(uiReducer, initialState);

	const changeColor = (color) => {
		dispatch({ type: "CHANGE", payload: color });
	};

	const value = {
		timeColor: uiState.timeColor,
		changeColor: changeColor,
	};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIProvider;

import { useReducer } from "react";
import UIContext from "./Context";

const initialState = {};

const uiReducer = (state, action) => {
	return state;
};

const UIProvider = ({ children }) => {
	const [uiState, dispatch] = useReducer(uiReducer, initialState);

	const value = {};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIProvider;

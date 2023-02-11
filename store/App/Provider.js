import { useReducer } from "react";
import AppContext from "./Context";

const initialState = {
	orientation: "PORTRAIT",
};

const appReducer = (state, action) => {
	if (action.type === "CHANGE") {
		return {
			orientation: action.payload,
		};
	}
	return state;
};

const AppProvider = ({ children }) => {
	const [appState, dispatch] = useReducer(appReducer, initialState);

	const changeOrientation = (orientation) => {
		if (orientation === 1 || orientation === 2) {
			dispatch({ type: "CHANGE", payload: "PORTRAIT" });
			return;
		}
		if (orientation === 3 || orientation === 4) {
			dispatch({ type: "CHANGE", payload: "LANDSCAPE" });
			return;
		}
	};

	const value = {
		orientation: appState.orientation,
		changeOrientation: changeOrientation,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

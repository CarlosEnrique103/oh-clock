import { useReducer } from "react";
import UIContext from "./Context";

const initialState = {
	timeColor: "#FFF",
	buttons: {
		sound: false,
		time: false,
		date: false,
	},
	imageBg: require("./../../assets/backgrounds/0.jpg"),
};

const uiReducer = (state, action) => {
	if (action.type === "CHANGE_COLOR") {
		return {
			...state,
			timeColor: action.payload,
		};
	}

	if (action.type === "CHANGE_IMAGE") {
		console.log("llego con el payload", action.payload);
		return {
			...state,
			imageBg: action.payload,
		};
	}

	if (action.type === "ACTIVATE_BUTTON") {
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
		dispatch({ type: "CHANGE_COLOR", payload: color });
	};

	const changeImage = (number) => {
		const images = {
			0: require("./../../assets/backgrounds/0.jpg"),
			1: require("./../../assets/backgrounds/1.jpg"),
			2: require("./../../assets/backgrounds/2.jpg"),
			3: require("./../../assets/backgrounds/3.jpg"),
			4: require("./../../assets/backgrounds/4.jpg"),
		};
		dispatch({ type: "CHANGE_IMAGE", payload: images[number] });
	};

	const activateButton = (name) => {
		dispatch({ type: "ACTIVATE_BUTTON", payload: name });
	};

	const value = {
		activateButton: activateButton,
		buttons: uiState.buttons,
		changeColor: changeColor,
		changeImage: changeImage,
		imageBg: uiState.imageBg,
		timeColor: uiState.timeColor,
	};

	return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};

export default UIProvider;

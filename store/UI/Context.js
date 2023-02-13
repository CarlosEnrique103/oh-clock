import { createContext } from "react";

const UIContext = createContext({
	timeColor: "#FFF",
	buttons: {
		sound: false,
		time: false,
		date: false,
	},
	changeColor: () => {},
	activateButton: () => {},
});

export default UIContext;

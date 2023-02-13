import { createContext } from "react";

const UIContext = createContext({
	timeColor: "#FFF",
	buttons: {
		sound: false,
		time: false,
		date: false,
		seconds: false,
	},
	imageBg: require("./../../assets/backgrounds/0.jpg"),
	changeColor: () => {},
	changeImage: () => {},
	activateButton: () => {},
});

export default UIContext;

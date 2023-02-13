import { createContext } from "react";

const UIContext = createContext({
	timeColor: "#FFF",
	changeColor: () => {},
});

export default UIContext;

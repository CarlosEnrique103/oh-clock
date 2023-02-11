import { createContext } from "react";

const AppContext = createContext({
	orientation: "",
	changeOrientation: () => {},
});

export default AppContext;

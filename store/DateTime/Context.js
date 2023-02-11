import { createContext } from "react";

const DateTimeContext = createContext({
	time: {
		format: "12",
	},
	date: "2023-14-02",
	changeFormat: () => {},
});

export default DateTimeContext;

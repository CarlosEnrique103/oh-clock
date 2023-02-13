import { createContext } from "react";

const DateTimeContext = createContext({
	time: {
		format: "12",
		value: "00:00",
	},
	changeFormat: () => {},
	updateTime: () => {},
});

export default DateTimeContext;

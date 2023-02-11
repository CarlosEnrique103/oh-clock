import { createContext } from "react";

const DateTimeContext = createContext({
	time: {
		hour: "00",
		minutes: "00",
		seconds: "00",
		format: "24",
	},
	date: "2023-14-02",
});

export default DateTimeContext;

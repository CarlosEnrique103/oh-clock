import { useReducer } from "react";
import DateTimeContext from "./Context";

const initialState = {
	time: {
		hour: "00",
		minutes: "00",
		seconds: "00",
		format: "24",
	},
	date: "2023-14-02",
};

const dateTimeReducer = (state, action) => {
	return state;
};

const DateTimeProvider = ({ children }) => {
	const [dateTimeState, dispatch] = useReducer(dateTimeReducer, initialState);

	const value = {
		time: {
			hour: dateTimeState.time.hour,
			minutes: dateTimeState.time.minutes,
			seconds: dateTimeState.time.seconds,
			format: dateTimeState.time.format,
		},
		date: "2023-14-02",
	};

	return (
		<DateTimeContext.Provider value={value}>
			{children}
		</DateTimeContext.Provider>
	);
};

export default DateTimeProvider;

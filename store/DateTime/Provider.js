import { useReducer } from "react";
import DateTimeContext from "./Context";

const initialState = {
	time: {
		format: "12",
	},
	date: "2023-14-02",
};

const dateTimeReducer = (state, action) => {
	if (action.type === "CHANGE") {
		return {
			...state,
			time: {
				format: state.time.format === "12" ? "24" : "12",
			},
		};
	}
	return state;
};

const DateTimeProvider = ({ children }) => {
	const [dateTimeState, dispatch] = useReducer(dateTimeReducer, initialState);

	const changeFormat = () => {
		dispatch({ type: "CHANGE" });
	};

	const value = {
		time: {
			format: dateTimeState.time.format,
		},
		date: "2023-14-02",
		changeFormat: changeFormat,
	};

	return (
		<DateTimeContext.Provider value={value}>
			{children}
		</DateTimeContext.Provider>
	);
};

export default DateTimeProvider;

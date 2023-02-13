import { useReducer } from "react";
import DateTimeContext from "./Context";

const initialState = {
	time: {
		format: "12",
		value: "00:00",
		seconds: "00",
	},
};

const dateTimeReducer = (state, action) => {
	if (action.type === "CHANGE_FORMAT") {
		return {
			...state,
			time: {
				...state.time,
				format: state.time.format === "12" ? "24" : "12",
			},
		};
	}

	if (action.type === "UPDATE_TIME") {
		return {
			...state,
			time: {
				...state.time,
				value: action.payload,
			},
		};
	}
	return state;
};

const DateTimeProvider = ({ children }) => {
	const [dateTimeState, dispatch] = useReducer(dateTimeReducer, initialState);

	const changeFormat = () => {
		dispatch({ type: "CHANGE_FORMAT" });
	};

	const updateTime = (value) => {
		dispatch({ type: "UPDATE_TIME", payload: value });
	};

	const value = {
		time: dateTimeState.time,
		changeFormat: changeFormat,
		updateTime: updateTime,
	};

	return (
		<DateTimeContext.Provider value={value}>
			{children}
		</DateTimeContext.Provider>
	);
};

export default DateTimeProvider;

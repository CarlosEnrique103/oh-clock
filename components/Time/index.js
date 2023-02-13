import { useContext, useEffect, useState } from "react";
import { View, Text } from "react-native";
import AppContext from "../../store/App/Context";
import DateTimeContext from "../../store/DateTime/Context";
import UIContext from "../../store/UI/Context";

import Styles from "./styles";

const Time = () => {
	const { time, updateTime } = useContext(DateTimeContext);
	const { timeColor } = useContext(UIContext);
	const { orientation } = useContext(AppContext);
	const [hour, setHour] = useState("00");
	const [minute, setMinute] = useState("00");
	const [second, setSecond] = useState("00");
	const styles = Styles(orientation, timeColor);

	useEffect(() => {
		const idInterval = setInterval(() => {
			const now = new Date(Date.now());
			let hour = now.getHours();
			let minute = now.getMinutes();
			let second = now.getSeconds();
			if (time.format === "12") {
				if (hour >= 12) {
					hour = hour % 12;
					if (hour === 0) {
						hour = 12;
					}
				}
			}
			hour = (hour < 10 ? "0" : "") + hour;
			minute = (minute < 10 ? "0" : "") + minute;
			second = (second < 10 ? "0" : "") + second;
			setHour(hour);
			setMinute(minute);
			setSecond(second);
			updateTime(`${hour}:${minute}`);
		}, 1000);

		return () => clearInterval(idInterval);
	}, [time.format]);

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.time}>{hour}</Text>
			</View>
			<View style={styles.card}>
				<Text style={styles.time}>{minute}</Text>
				<View style={styles.second}>
					<Text style={styles.timeSmall}>{second}</Text>
				</View>
			</View>
		</View>
	);
};

export default Time;

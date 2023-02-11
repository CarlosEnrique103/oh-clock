import { useContext } from "react";
import { View, Text } from "react-native";
import AppContext from "../../store/App/Context";
import DateTimeContext from "../../store/DateTime/Context";
import Styles from "./styles";

const Time = () => {
	const { time } = useContext(DateTimeContext);
	const { orientation } = useContext(AppContext);

	console.log({ orientation }, "From values");
	const styles = Styles(orientation);

	console.log({ styles });

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text style={styles.time}>{time.hour}</Text>
				<View style={styles.line}></View>
			</View>
			<View style={styles.card}>
				<Text style={styles.time}>{time.minutes}</Text>
				<View style={styles.line}></View>
			</View>
		</View>
	);
};

export default Time;

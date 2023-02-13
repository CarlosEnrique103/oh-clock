import { StyleSheet } from "react-native";

const styles = (color) =>
	StyleSheet.create({
		circle: {
			height: 25,
			width: 25,
			borderRadius: 12.5,
			backgroundColor: color,
		},
	});

export default styles;

import { StyleSheet } from "react-native";

const styles = (orientation) =>
	StyleSheet.create({
		container: {
			width: orientation === "PORTRAIT" ? "100%" : 600,
			alignItems: "center",
			justifyContent: "center",
			padding: 5,
		},
	});
export default styles;

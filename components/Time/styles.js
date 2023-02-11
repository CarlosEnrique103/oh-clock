import { StyleSheet } from "react-native";
import colors from "./../../constants/colors";

const styles = (orientation) =>
	StyleSheet.create({
		container: {
			flex: 1,
			flexDirection: orientation === "PORTRAIT" ? "column" : "row",
			alignItems: "center",
			justifyContent: "center",
		},
		card: {
			width: 270,
			height: 270,
			borderRadius: 20,
			backgroundColor: colors.bgTime,
			alignItems: "center",
			justifyContent: "center",
			marginRight: orientation === "PORTRAIT" ? 0 : 20,
			marginBottom: orientation === "PORTRAIT" ? 20 : 0,
			position: "relative",
		},
		time: {
			color: colors.white,
			fontSize: 200,
			fontFamily: "FjallaOne",
		},
		line: {
			position: "absolute",
			width: "100%",
			height: 8,
			top: "50%",
			backgroundColor: colors.bgApp,
			transform: [{ translateY: 4 }],
		},
		second: {
			width: 70,
			height: 70,
			borderRadius: 10,
			backgroundColor: colors.bgTime,
			alignItems: "center",
			justifyContent: "center",
			position: "absolute",
			bottom: 10,
			right: 0,
			transform: [{ translateX: 35 }],
			borderWidth: 1,
			borderColor: colors.white,
		},
		timeSmall: {
			position: "absolute",
			color: colors.white,
			fontSize: 40,
			fontFamily: "FjallaOne",
		},
	});
export default styles;

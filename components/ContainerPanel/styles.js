import { StyleSheet } from "react-native";
import colors from "./../../constants/colors";

const styles = StyleSheet.create({
	container: {
		width: "100%",
		height: 40,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		backgroundColor: colors.bgBar,
		margin: -20,
		borderRadius: 20,
		paddingHorizontal: 10,
	},
	main: {
		flex: 1,
	},
	mainButton: {
		width: 20,
		height: 20,
		padding: 4,
		backgroundColor: colors.bgItemBar,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
	},
	buttons: {
		flex: 6,
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
});
export default styles;

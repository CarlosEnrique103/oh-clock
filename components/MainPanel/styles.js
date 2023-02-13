import { StyleSheet } from "react-native";
import colors from "./../../constants/colors";

const styles = StyleSheet.create({
	button: {
		padding: 4,
		paddingHorizontal: 6,
		backgroundColor: colors.bgItemBar,
		borderRadius: 4,
	},
	time: {
		color: colors.white,
		fontSize: 16,
		fontFamily: "FjallaOne",
	},
});
export default styles;

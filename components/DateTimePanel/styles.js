import { StyleSheet } from "react-native";
import colors from "./../../constants/colors";

const styles = (activeBtnTime, activeBtnDate) =>
	StyleSheet.create({
		btnTime: {
			padding: 4,
			paddingHorizontal: 6,
			backgroundColor: activeBtnTime
				? colors.bgItemBarEnabled
				: colors.bgItemBarDisabled,
			borderRadius: 4,
		},
		btnDate: {
			padding: 4,
			paddingHorizontal: 6,
			backgroundColor: activeBtnDate
				? colors.bgItemBarEnabled
				: colors.bgItemBarDisabled,
			borderRadius: 4,
		},
		time: {
			color: activeBtnTime ? colors.white : colors.bgItemBarTextDisabled,
			fontSize: 16,
			fontFamily: "FjallaOne",
		},
		date: {
			color: activeBtnDate ? colors.white : colors.bgItemBarTextDisabled,
			fontSize: 16,
			fontFamily: "FjallaOne",
		},
	});
export default styles;

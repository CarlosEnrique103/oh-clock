import { StyleSheet } from "react-native";
import colors from "./../../constants/colors";

const styles = (activateBtnTime, activateBtnDate, activateBtnSec) =>
	StyleSheet.create({
		btnTime: {
			padding: 4,
			paddingHorizontal: 6,
			backgroundColor: activateBtnTime
				? colors.bgItemBarEnabled
				: colors.bgItemBarDisabled,
			borderRadius: 4,
		},
		btnDate: {
			padding: 4,
			paddingHorizontal: 6,
			backgroundColor: activateBtnDate
				? colors.bgItemBarEnabled
				: colors.bgItemBarDisabled,
			borderRadius: 4,
		},
		btnSec: {
			padding: 4,
			paddingHorizontal: 6,
			backgroundColor: activateBtnSec
				? colors.bgItemBarEnabled
				: colors.bgItemBarDisabled,
			borderRadius: 4,
		},
		time: {
			color: activateBtnTime ? colors.white : colors.bgItemBarTextDisabled,
			fontSize: 16,
			fontFamily: "FjallaOne",
		},
		date: {
			color: activateBtnDate ? colors.white : colors.bgItemBarTextDisabled,
			fontSize: 16,
			fontFamily: "FjallaOne",
		},
		seconds: {
			color: activateBtnSec ? colors.white : colors.bgItemBarTextDisabled,
			fontSize: 16,
			fontFamily: "FjallaOne",
		},
	});
export default styles;

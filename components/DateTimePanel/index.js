import { useContext, useState } from "react";
import { Pressable, Text } from "react-native";
import DateTimeContext from "../../store/DateTime/Context";
import UIContext from "../../store/UI/Context";
import ContainerPanel from "../ContainerPanel";
import Styles from "./styles";

const DateTimePanel = ({ onBack }) => {
	const { changeFormat, time } = useContext(DateTimeContext);
	const { activateButton, buttons } = useContext(UIContext);
	const styles = Styles(buttons.time, buttons.date, buttons.seconds);

	const handleChangeBtnTime = () => {
		activateButton("time");
		changeFormat();
	};

	// const handleChangeBtnDate = () => {
	// 	activateButton("date");
	// };

	// <Pressable style={styles.btnDate} onPress={handleChangeBtnDate}>
	// 		<Text style={styles.date}>2023-12-25</Text>
	// </Pressable>

	return (
		<ContainerPanel type='secondary' onEvent={onBack}>
			<Pressable
				style={styles.btnSec}
				onPress={() => activateButton("seconds")}
			>
				<Text style={styles.seconds}>SEC</Text>
			</Pressable>
			<Pressable style={styles.btnTime} onPress={handleChangeBtnTime}>
				<Text style={styles.time}>24H</Text>
			</Pressable>
		</ContainerPanel>
	);
};

export default DateTimePanel;

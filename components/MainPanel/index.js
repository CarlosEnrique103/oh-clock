import { Text, Pressable } from "react-native";
import styles from "./styles";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import ContainerPanel from "../ContainerPanel";
import { useContext } from "react";
import DateTimeContext from "../../store/DateTime/Context";
import UIContext from "../../store/UI/Context";

const MainPanel = ({ onShow, onPanelNumber, onPlaySound, onStopSound }) => {
	const { time } = useContext(DateTimeContext);
	const { buttons, activateButton } = useContext(UIContext);

	const handleActivateSound = async () => {
		activateButton("sound");
		if (buttons.sound) {
			await onStopSound();
			return;
		}
		await onPlaySound();
	};

	console.log({ buttons });

	return (
		<ContainerPanel type='primary' style={styles.container} onEvent={onShow}>
			<Pressable
				style={[
					styles.button,
					{
						backgroundColor: buttons.sound
							? colors.bgItemBarEnabled
							: colors.bgItemBar,
					},
				]}
				onPress={handleActivateSound}
			>
				<Feather name='volume-2' size={22} color={colors.white} />
			</Pressable>
			<Pressable style={styles.button} onPress={() => onPanelNumber(1)}>
				<Text style={styles.time}>{time.value}</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => onPanelNumber(2)}>
				<FontAwesome5 name='palette' size={22} color={colors.white} />
			</Pressable>
			<Pressable style={styles.button} onPress={() => onPanelNumber(3)}>
				<MaterialIcons name='photo-library' size={22} color={colors.white} />
			</Pressable>
		</ContainerPanel>
	);
};

export default MainPanel;

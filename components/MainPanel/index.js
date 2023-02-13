import { View, Text, Pressable } from "react-native";
import styles from "./styles";
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import ContainerPanel from "../ContainerPanel";
const MainPanel = ({ onShow, onPanelNumber }) => {
	return (
		<ContainerPanel type='primary' style={styles.container} onEvent={onShow}>
			<View style={styles.button}>
				<Feather name='volume-2' size={22} color={colors.white} />
			</View>
			<Pressable style={styles.button} onPress={() => onPanelNumber(1)}>
				<Text style={styles.time}>00:00</Text>
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

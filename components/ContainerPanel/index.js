import { View, Pressable } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../constants/colors";

const ContainerPanel = ({ children, onEvent, type = "primary" }) => {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Pressable style={styles.mainButton} onPress={onEvent}>
					{type === "primary" && (
						<AntDesign name='close' size={14} color={colors.white} />
					)}

					{type === "secondary" && (
						<Ionicons name='chevron-back' size={14} color={colors.white} />
					)}
				</Pressable>
			</View>
			<View style={styles.buttons}>{children}</View>
		</View>
	);
};

export default ContainerPanel;

import { useContext } from "react";
import { Pressable } from "react-native";
import UIContext from "../../../store/UI/Context";
import Styles from "./styles";

const Circle = ({ color }) => {
	const styles = Styles(color);

	const { changeColor } = useContext(UIContext);
	return (
		<Pressable
			onPress={() => changeColor(color)}
			style={styles.circle}
		></Pressable>
	);
};

export default Circle;

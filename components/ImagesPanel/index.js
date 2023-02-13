import { useContext } from "react";
import { Image, Pressable } from "react-native";
import UIContext from "../../store/UI/Context";
import ContainerPanel from "../ContainerPanel";
import styles from "./styles";

const ImagesPanel = ({ onBack }) => {
	const { changeImage } = useContext(UIContext);

	return (
		<ContainerPanel type='secondary' onEvent={onBack}>
			<Pressable style={styles.imageContainer} onPress={() => changeImage(0)}>
				<Image
					source={require("./../../assets/backgrounds/0-50x30.jpg")}
					style={styles.image}
				/>
			</Pressable>
			<Pressable style={styles.imageContainer} onPress={() => changeImage(1)}>
				<Image
					source={require("./../../assets/backgrounds/1-50x30.jpg")}
					style={styles.image}
				/>
			</Pressable>
			<Pressable style={styles.imageContainer} onPress={() => changeImage(2)}>
				<Image
					source={require("./../../assets/backgrounds/2-50x30.jpg")}
					style={styles.image}
				/>
			</Pressable>

			<Pressable style={styles.imageContainer} onPress={() => changeImage(3)}>
				<Image
					source={require("./../../assets/backgrounds/3-50x30.jpg")}
					style={styles.image}
				/>
			</Pressable>

			<Pressable style={styles.imageContainer} onPress={() => changeImage(4)}>
				<Image
					source={require("./../../assets/backgrounds/4-50x30.jpg")}
					style={styles.image}
				/>
			</Pressable>
		</ContainerPanel>
	);
};

export default ImagesPanel;

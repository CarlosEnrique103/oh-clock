import { Text } from "react-native";
import ContainerPanel from "../ContainerPanel";

const ImagesPanel = ({ onBack }) => {
	return (
		<ContainerPanel type='secondary' onEvent={onBack}>
			<Text>Images</Text>
		</ContainerPanel>
	);
};

export default ImagesPanel;

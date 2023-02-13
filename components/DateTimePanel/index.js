import { Text } from "react-native";
import ContainerPanel from "../ContainerPanel";

const DateTimePanel = ({ onBack }) => {
	return (
		<ContainerPanel type='secondary' onEvent={onBack}>
			<Text>Hello</Text>
		</ContainerPanel>
	);
};

export default DateTimePanel;

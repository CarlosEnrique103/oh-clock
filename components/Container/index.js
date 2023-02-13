import { useContext } from "react";
import { View } from "react-native";
import AppContext from "../../store/App/Context";
import Styles from "./styles";

const Container = ({ children }) => {
	const { orientation } = useContext(AppContext);
	const styles = Styles(orientation);

	return <View style={styles.container}>{children}</View>;
};

export default Container;

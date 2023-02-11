import { useContext, useEffect, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as SplashScreen from "expo-splash-screen";
import Time from "./Time";
import AppContext from "./../store/App/Context";
import colors from "../constants/colors";
import { useFonts } from "expo-font";
import DateTimeContext from "../store/DateTime/Context";

const Main = () => {
	const { changeOrientation } = useContext(AppContext);

	const [fontsLoaded] = useFonts({
		FjallaOne: require("./../assets/fonts/FjallaOne.ttf"),
	});
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	useEffect(() => {
		const unlockOrientation = async () => {
			await ScreenOrientation.unlockAsync();
		};
		unlockOrientation();
		const subscription = ScreenOrientation.addOrientationChangeListener(
			(orientationChange) => {
				const value = orientationChange.orientationInfo.orientation;
				changeOrientation(value);
			}
		);

		return () => subscription.remove();
	}, []);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<Time />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bgApp,
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Main;

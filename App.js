import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as ScreenOrientation from "expo-screen-orientation";
import colors from "./assets/constants/colors";

export default function App() {
	const [fontsLoaded] = useFonts({
		FjallaOne: require("./assets/fonts/FjallaOne.ttf"),
	});

	const [orientation, setOrientation] = useState(
		ScreenOrientation.Orientation.Portrait
	);

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
				setOrientation(orientationChange.orientation);
			}
		);

		return () => subscription.remove();
	}, []);

	useEffect(() => {
		const getOrientation = async () => {
			const data = await ScreenOrientation.getOrientationAsync();
			console.log({ data });
		};

		getOrientation();
	}, [orientation]);

	if (!fontsLoaded) {
		return null;
	}

	return <View style={styles.container} onLayout={onLayoutRootView}></View>;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.bgApp,
		alignItems: "center",
		justifyContent: "center",
	},
});

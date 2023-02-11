import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
	const [fontsLoaded] = useFonts({
		FjallaOne: require("./assets/fonts/FjallaOne.ttf"),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}
	return (
		<View style={styles.container} onLayout={onLayoutRootView}>
			<StatusBar style='auto' />
			<Text style={{ fontFamily: "FjallaOne", fontSize: 30 }}>Inter Black</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

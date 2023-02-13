import { useContext, useEffect, useCallback, useState, Fragment } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import Time from "./Time";
import AppContext from "./../store/App/Context";
import colors from "../constants/colors";
import Container from "./Container";
import MainPanel from "./MainPanel";
import ColorsPanel from "./ColorsPanel";
import DateTimePanel from "./DateTimePanel";
import ImagesPanel from "./ImagesPanel";

const Main = () => {
	const { changeOrientation } = useContext(AppContext);
	const [showPanel, setShowPanel] = useState(false);
	const [panelNumber, setPanelNumber] = useState(0);

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

	const handleShowPanel = () => setShowPanel((prev) => !prev);
	const handleBackPanel = () => setPanelNumber(0);
	const handlePanelNumber = (number) => setPanelNumber(number);

	return (
		<Pressable
			style={styles.container}
			onLayout={onLayoutRootView}
			onPress={handleShowPanel}
		>
			<Container>
				<Time />
				{showPanel && (
					<Fragment>
						{panelNumber === 0 && (
							<MainPanel
								onShow={handleShowPanel}
								onPanelNumber={handlePanelNumber}
							/>
						)}
						{panelNumber === 1 && <DateTimePanel onBack={handleBackPanel} />}
						{panelNumber === 2 && <ColorsPanel onBack={handleBackPanel} />}
						{panelNumber === 3 && <ImagesPanel onBack={handleBackPanel} />}
					</Fragment>
				)}
			</Container>
		</Pressable>
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

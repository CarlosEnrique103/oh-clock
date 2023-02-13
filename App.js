import { Fragment } from "react";
import DateTimeProvider from "./store/DateTime/Provider";
import AppProvider from "./store/App/Provider";
import UIProvider from "./store/UI/Provider";
import Main from "./components/Main";

export default function App() {
	return (
		<Fragment>
			<AppProvider>
				<DateTimeProvider>
					<UIProvider>
						<Main />
					</UIProvider>
				</DateTimeProvider>
			</AppProvider>
		</Fragment>
	);
}

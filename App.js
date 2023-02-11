import { Fragment } from "react";
import DateTimeProvider from "./store/DateTime/Provider";
import AppProvider from "./store/App/Provider";
import Main from "./components/Main";

export default function App() {
	return (
		<Fragment>
			<AppProvider>
				<DateTimeProvider>
					<Main />
				</DateTimeProvider>
			</AppProvider>
		</Fragment>
	);
}

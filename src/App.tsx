import { useEffect } from "react";
import MainPage from "./Main/MainPage";

const App = () => {
	useEffect(() => {
		document.title = "Business Strategy Project";
	}, []);

	return (
		<div>
			<MainPage />
		</div>
	);
};

export default App;

import { useEffect } from "react";
import MmainPage from "./Mmain/MmainPage";

const App = () => {
	useEffect(() => {
		document.title = "Business Strategy Project";
	}, []);

	return (
		<div>
			<MmainPage />
		</div>
	);
};

export default App;

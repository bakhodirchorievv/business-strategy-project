import { useEffect } from "react";
// import MmainPage from "./Mmain/MmainPage";
// import BrandStrategy from "./BrandStrategy/BrandStrategy";
import Naming from "./Naming/Naming";
// import Logo from "./Logo/Logo";

const App = () => {
	useEffect(() => {
		document.title = "Business Strategy Project";
	}, []);

	return (
		<div>
			{/* <MmainPage /> */}
			{/* <BrandStrategy /> */}
			<Naming />
			{/* <Logo /> */}
		</div>
	);
};

export default App;

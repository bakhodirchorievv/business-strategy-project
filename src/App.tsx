import { useEffect } from "react";
import Expert from "./Expert/Expert";
// import Shop from "./Shop/Shop";
// import Corporative from "./Corporative/Corporative";
// import Card from "./Card/Card";
// import MDesign from "./MDesign/MDesign";
// import Packing from "./Packing/Packing";
// import Corporate from "./Corporate/Corporate";
// import Guideline from "./Guideline/Guideline";
// import Site from "./Site/Site";
// import Descriptor from "./Descriptor/Descriptor";
// import MmainPage from "./Mmain/MmainPage";
// import BrandStrategy from "./BrandStrategy/BrandStrategy";
// import Naming from "./Naming/Naming";
// import Logo from "./Logo/Logo";

const App = () => {
	useEffect(() => {
		document.title = "Business Strategy Project";
	}, []);

	return (
		<div>
			{/* <MmainPage /> */}
			{/* <BrandStrategy /> */}
			{/* <Naming /> */}
			{/* <Logo /> */}
			{/* <Descriptor /> */}
			{/* <Corporate /> */}
			{/* <Guideline /> */}
			{/* <Site /> */}
			{/* <Packing /> */}
			{/* <MDesign /> */}
			{/* <Card /> */}
			{/* <Corporative /> */}
			{/* <Shop /> */}
			<Expert />
		</div>
	);
};

export default App;

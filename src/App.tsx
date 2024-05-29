import { useEffect } from "react";
// import Contact from "./Components/Contacts/Contact";
// import Cases from "./Components/Cases/Cases";
// import Native from "./Components/Native/Native";
// import Radio from "./Components/Radio/Radio";
// import Television from "./Components/Television/Television";
// import Partner from "./Components/Partner/Partner";
// import Presentation from "./Components/Presentatiton/Presentation";
// import Souvenir from "./Components/Souvenir/Souvenir";
// import Expert from "./Components/Expert/Expert";
// import Shop from "./Components/Shop/Shop";
// import Corporative from "./Components/Corporative/Corporative";
// import Card from "./Components/Card/Card";
// import MDesign from "./Components/MDesign/MDesign";
// import Packing from "./Components/Packing/Packing";
// import Site from "./Components/Site/Site";
// import Guideline from "./Components/Guideline/Guideline";
// import Corporate from "./Components/Corporate/Corporate";
// import Descriptor from "./Components/Descriptor/Descriptor";
// import Logo from "./Components/Logo/Logo";
// import Naming from "./Components/Naming/Naming";
// import BrandStrategy from "./Components/BrandStrategy/BrandStrategy";
import MmainPage from "./Components/Mmain/MmainPage";

const App = () => {
	useEffect(() => {
		document.title = "Business Strategy Project";
	}, []);

	return (
		<div>
			<MmainPage />
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
			{/* <Expert /> */}
			{/* <Souvenir /> */}
			{/* <Presentation /> */}
			{/* <Partner /> */}
			{/* <Television /> */}
			{/* <Radio /> */}
			{/* <Native /> */}
			{/* <Cases /> */}
			{/* <Contact /> */}
		</div>
	);
};

export default App;

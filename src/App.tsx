import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import MmainPage from "./Components/Mmain/MmainPage";
import Cases from "./Components/Cases/Cases";
import BrandStrategy from "./Components/BrandStrategy/BrandStrategy";
import Card from "./Components/Card/Card";
import Contact from "./Components/Contacts/Contact";
import Corporate from "./Components/Corporate/Corporate";
import Corporative from "./Components/Corporative/Corporative";
import Descriptor from "./Components/Descriptor/Descriptor";
import Expert from "./Components/Expert/Expert";
import Guideline from "./Components/Guideline/Guideline";
import Logo from "./Components/Logo/Logo";
import MDesign from "./Components/MDesign/MDesign";
import Naming from "./Components/Naming/Naming";
import Native from "./Components/Native/Native";
import Packing from "./Components/Packing/Packing";
import Partner from "./Components/Partner/Partner";
import Presentation from "./Components/Presentatiton/Presentation";
import Radio from "./Components/Radio/Radio";
import Shop from "./Components/Shop/Shop";
import Site from "./Components/Site/Site";
import Souvenir from "./Components/Souvenir/Souvenir";
import Television from "./Components/Television/Television";

const App = () => {
	useEffect(() => {
		document.title = "Business Strategy Project";
	}, []);

	return (
		<Router basename="/business-strategy-project">
			<div>
				<Header />
				<Routes>
					<Route path="/" element={<MmainPage />} />
					<Route path="/Cases" element={<Cases />} />
					<Route path="/BrandStrategy" element={<BrandStrategy />} />
					<Route path="/Card" element={<Card />} />
					<Route path="/Contact" element={<Contact />} />
					<Route path="/Corporate" element={<Corporate />} />
					<Route path="/Corporative" element={<Corporative />} />
					<Route path="/Descriptor" element={<Descriptor />} />
					<Route path="/Expert" element={<Expert />} />
					<Route path="/Guideline" element={<Guideline />} />
					<Route path="/Logo" element={<Logo />} />
					<Route path="/MDesign" element={<MDesign />} />
					<Route path="/Naming" element={<Naming />} />
					<Route path="/Native" element={<Native />} />
					<Route path="/Packing" element={<Packing />} />
					<Route path="/Partner" element={<Partner />} />
					<Route path="/Presentation" element={<Presentation />} />
					<Route path="/Radio" element={<Radio />} />
					<Route path="/Shop" element={<Shop />} />
					<Route path="/Site" element={<Site />} />
					<Route path="/Souvenir" element={<Souvenir />} />
					<Route path="/Television" element={<Television />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;

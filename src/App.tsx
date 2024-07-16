import { lazy, Suspense, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Update from "./Utils/Update";
import Container from "./Utils/Container";
import ScrollToTop from "./Utils/ScrollTop";

const MmainPage = lazy(() => import("./Pages/Mmain/MmainPage"));
const Cases = lazy(() => import("./Pages/Cases/Cases"));
const BrandStrategy = lazy(() => import("./Pages/BrandStrategy/BrandStrategy"));
const Card = lazy(() => import("./Pages/Card/Card"));
const Contact = lazy(() => import("./Pages/Contacts/Contact"));
const Corporate = lazy(() => import("./Pages/Corporate/Corporate"));
const Corporative = lazy(() => import("./Pages/Corporative/Corporative"));
const Descriptor = lazy(() => import("./Pages/Descriptor/Descriptor"));
const Expert = lazy(() => import("./Pages/Expert/Expert"));
const Guideline = lazy(() => import("./Pages/Guideline/Guideline"));
const Logo = lazy(() => import("./Pages/Logo/Logo"));
const MDesign = lazy(() => import("./Pages/MDesign/MDesign"));
const Naming = lazy(() => import("./Pages/Naming/Naming"));
const Native = lazy(() => import("./Pages/Native/Native"));
const Packing = lazy(() => import("./Pages/Packing/Packing"));
const Partner = lazy(() => import("./Pages/Partner/Partner"));
const Presentation = lazy(() => import("./Pages/Presentatiton/Presentation"));
const Radio = lazy(() => import("./Pages/Radio/Radio"));
const Shop = lazy(() => import("./Pages/Shop/Shop"));
const Site = lazy(() => import("./Pages/Site/Site"));
const Souvenir = lazy(() => import("./Pages/Souvenir/Souvenir"));
const Television = lazy(() => import("./Pages/Television/Television"));

const Admin = lazy(() => import("./Components/AdminDashboard/Admin"));

const App = () => {
	useEffect(() => {
		document.title = "Business Strategy Project";
	}, []);

	return (
		<Router>
			<div>
				<Container>
					<Header />
					<Update />
					<ScrollToTop />
					<Suspense fallback={<div>Loading...</div>}>
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
							<Route path="/Admin" element={<Admin />} />
						</Routes>
					</Suspense>

					<Footer />
				</Container>
			</div>
		</Router>
	);
};

export default App;

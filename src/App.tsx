import { lazy, Suspense, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useLocation,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

const MmainPage = lazy(() => import("./Components/Mmain/MmainPage"));
const Cases = lazy(() => import("./Components/Cases/Cases"));
const BrandStrategy = lazy(
	() => import("./Components/BrandStrategy/BrandStrategy")
);
const Card = lazy(() => import("./Components/Card/Card"));
const Contact = lazy(() => import("./Components/Contacts/Contact"));
const Corporate = lazy(() => import("./Components/Corporate/Corporate"));
const Corporative = lazy(() => import("./Components/Corporative/Corporative"));
const Descriptor = lazy(() => import("./Components/Descriptor/Descriptor"));
const Expert = lazy(() => import("./Components/Expert/Expert"));
const Guideline = lazy(() => import("./Components/Guideline/Guideline"));
const Logo = lazy(() => import("./Components/Logo/Logo"));
const MDesign = lazy(() => import("./Components/MDesign/MDesign"));
const Naming = lazy(() => import("./Components/Naming/Naming"));
const Native = lazy(() => import("./Components/Native/Native"));
const Packing = lazy(() => import("./Components/Packing/Packing"));
const Partner = lazy(() => import("./Components/Partner/Partner"));
const Presentation = lazy(
	() => import("./Components/Presentatiton/Presentation")
);
const Radio = lazy(() => import("./Components/Radio/Radio"));
const Shop = lazy(() => import("./Components/Shop/Shop"));
const Site = lazy(() => import("./Components/Site/Site"));
const Souvenir = lazy(() => import("./Components/Souvenir/Souvenir"));
const Television = lazy(() => import("./Components/Television/Television"));

const Update = () => {
	const location = useLocation();

	useEffect(() => {
		const lastPathname = sessionStorage.getItem("lastPathname");
		if (lastPathname !== location.pathname) {
			sessionStorage.setItem("lastPathname", location.pathname);
			window.location.reload();
		}
	}, [location]);

	return null;
};

const App = () => {
	useEffect(() => {
		document.title = "Business Strategy Project";
	}, []);

	return (
		<Router basename="/business-strategy-project">
			<div>
				<Header />
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
					</Routes>
				</Suspense>
				<Update />
				<Footer />
			</div>
		</Router>
	);
};

export default App;

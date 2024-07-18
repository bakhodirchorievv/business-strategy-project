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

// admin pages start
const Admin = lazy(() => import("../src/Components/AdminDashboard/Admin"));
const MainPageCard = lazy(
	() => import("./Components/AdminDashboard/MainPageCard/MainPage")
);
const BrandStrategyCard = lazy(
	() =>
		import("./Components/AdminDashboard/BrandStrategyCard/BrandStrategyCard")
);
const VizitkaCard = lazy(
	() => import("./Components/AdminDashboard/VizitkaCard/VizitkaCard")
);
const CorporateCard = lazy(
	() => import("./Components/AdminDashboard/CorporateCard/CorporateCard")
);
const CorporativeCard = lazy(
	() => import("./Components/AdminDashboard/CorporativeCard/CorporativeCard")
);
const DescriptorCard = lazy(
	() => import("./Components/AdminDashboard/DescriptorCard/DescriptorCard")
);
const ExpertCard = lazy(
	() => import("./Components/AdminDashboard/ExpertCard/ExpertCard")
);
const GuidelineCard = lazy(
	() => import("./Components/AdminDashboard/GuidelineCard/GuidelineCard")
);
const LogoCard = lazy(
	() => import("./Components/AdminDashboard/LogoCard/LogoCard")
);
const MotionDesignCard = lazy(
	() => import("./Components/AdminDashboard/MotionDesignCard/MotionDesignCard")
);
const NamingCard = lazy(
	() => import("./Components/AdminDashboard/NamingCard/NamingCard")
);
const NativeCard = lazy(
	() => import("./Components/AdminDashboard/NativeCard/NativeCard")
);
const PackingCard = lazy(
	() => import("./Components/AdminDashboard/PackingCard/PackingCard")
);
const PartnerCard = lazy(
	() => import("./Components/AdminDashboard/PartnerCard/PartnerCard")
);
const PresentationCard = lazy(
	() => import("./Components/AdminDashboard/PresentationCard/PresentationCard")
);
const RadioCard = lazy(
	() => import("./Components/AdminDashboard/RadioCard/RadioCard")
);
const ShopCard = lazy(
	() => import("./Components/AdminDashboard/ShopCard/ShopCard")
);
const SiteCard = lazy(
	() => import("./Components/AdminDashboard/SiteCard/SiteCard")
);
const SouvenirCard = lazy(
	() => import("./Components/AdminDashboard/SouvenirCard/SouvenirCard")
);
const TelevisionCard = lazy(
	() => import("./Components/AdminDashboard/TelevisionCard/TelevisionCard")
);

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

							{/* admin pages start */}
							<Route path="/Admin" element={<Admin />} />
							<Route path="/Admin/MainPage" element={<MainPageCard />} />
							<Route
								path="/Admin/BrandStrategy"
								element={<BrandStrategyCard />}
							/>
							<Route path="/Admin/Card" element={<VizitkaCard />} />
							<Route path="/Admin/Corporate" element={<CorporateCard />} />
							<Route path="/Admin/Corporative" element={<CorporativeCard />} />
							<Route path="/Admin/Descriptor" element={<DescriptorCard />} />
							<Route path="/Admin/Expert" element={<ExpertCard />} />
							<Route path="/Admin/Guideline" element={<GuidelineCard />} />
							<Route path="/Admin/Logo" element={<LogoCard />} />
							<Route
								path="/Admin/MotionDesign"
								element={<MotionDesignCard />}
							/>
							<Route path="/Admin/Naming" element={<NamingCard />} />
							<Route path="/Admin/Native" element={<NativeCard />} />
							<Route path="/Admin/Packing" element={<PackingCard />} />
							<Route path="/Admin/Partner" element={<PartnerCard />} />
							<Route
								path="/Admin/Presentation"
								element={<PresentationCard />}
							/>
							<Route path="/Admin/Radio" element={<RadioCard />} />
							<Route path="/Admin/Shop" element={<ShopCard />} />
							<Route path="/Admin/Site" element={<SiteCard />} />
							<Route path="/Admin/Souvenir" element={<SouvenirCard />} />
							<Route path="/Admin/Television" element={<TelevisionCard />} />
						</Routes>
					</Suspense>

					<Footer />
				</Container>
			</div>
		</Router>
	);
};

export default App;

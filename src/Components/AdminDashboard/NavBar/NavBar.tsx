import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div className="navBar-wrapper">
			<ul className="nav-item-wrapper">
				<Link to="/Admin">
					<li
						className={`nav-item ${currentPath === "/Admin" ? "clicked" : ""}`}
					>
						Cases
					</li>
				</Link>
				<Link to="/Admin/MainPage">
					<li
						className={`nav-item ${
							currentPath === "/Admin/MainPage" ? "clicked" : ""
						}`}
					>
						Main Page
					</li>
				</Link>
				<Link to="/Admin/BrandStrategy">
					<li
						className={`nav-item ${
							currentPath === "/Admin/BrandStrategy" ? "clicked" : ""
						}`}
					>
						Brand Strategy
					</li>
				</Link>
				<Link to="/Admin/Card">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Card" ? "clicked" : ""
						}`}
					>
						Card
					</li>
				</Link>
				<Link to="/Admin/Corporate">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Corporate" ? "clicked" : ""
						}`}
					>
						Corporate
					</li>
				</Link>
				<Link to="/Admin/Corporative">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Corporative" ? "clicked" : ""
						}`}
					>
						Corporative
					</li>
				</Link>
				<Link to="/Admin/Descriptor">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Descriptor" ? "clicked" : ""
						}`}
					>
						Descriptor
					</li>
				</Link>
				<Link to="/Admin/Expert">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Expert" ? "clicked" : ""
						}`}
					>
						Expert
					</li>
				</Link>
				<Link to="/Admin/Guideline">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Guideline" ? "clicked" : ""
						}`}
					>
						Guideline
					</li>
				</Link>
				<Link to="/Admin/Logo">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Logo" ? "clicked" : ""
						}`}
					>
						Logo
					</li>
				</Link>
				<Link to="/Admin/MotionDesign">
					<li
						className={`nav-item ${
							currentPath === "/Admin/MotionDesign" ? "clicked" : ""
						}`}
					>
						Motion Design
					</li>
				</Link>
				<Link to="/Admin/Naming">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Naming" ? "clicked" : ""
						}`}
					>
						Naming
					</li>
				</Link>
				<Link to="/Admin/Native">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Native" ? "clicked" : ""
						}`}
					>
						Native
					</li>
				</Link>
				<Link to="/Admin/Packing">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Packing" ? "clicked" : ""
						}`}
					>
						Packing
					</li>
				</Link>
				<Link to="/Admin/Partner">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Partner" ? "clicked" : ""
						}`}
					>
						Partner
					</li>
				</Link>
				<Link to="/Admin/Presentation">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Presentation" ? "clicked" : ""
						}`}
					>
						Presentation
					</li>
				</Link>
				<Link to="/Admin/Radio">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Radio" ? "clicked" : ""
						}`}
					>
						Radio
					</li>
				</Link>
				<Link to="/Admin/Shop">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Shop" ? "clicked" : ""
						}`}
					>
						Shop
					</li>
				</Link>
				<Link to="/Admin/Site">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Site" ? "clicked" : ""
						}`}
					>
						Site
					</li>
				</Link>
				<Link to="/Admin/Souvenir">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Souvenir" ? "clicked" : ""
						}`}
					>
						Souvenir
					</li>
				</Link>
				<Link to="/Admin/Television">
					<li
						className={`nav-item ${
							currentPath === "/Admin/Television" ? "clicked" : ""
						}`}
					>
						Television
					</li>
				</Link>
			</ul>
		</div>
	);
};

export default NavBar;

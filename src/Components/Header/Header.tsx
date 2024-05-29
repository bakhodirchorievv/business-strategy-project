import { Link } from "react-router-dom";
// import "../Header/Header.css";
// import "../Header/HeaderResponsive.css";
import "./Header.css";
import "./HeaderResponsive.css";

const Header = () => {
	return (
		<>
			<header className="header">
				<img
					className="head-img"
					src="/business-strategy-project/MainPage/Vector (4).png"
					alt=""
				/>
				<ul className="ul-wrapper getNone">
					<Link to={"Cases"}>
						<li className="list-item head-case">Кейсы</li>
					</Link>
					<li className="list-item head-service">Услуги</li>
					<li className="list-item head-company">О компании</li>
					<Link to={"Contact"}>
						<li className="list-item head-contact">Контакты</li>
					</Link>
				</ul>
				<div className="header-burger">
					<button className="overallBtn overallBtn head-btn getNone">
						время написать
					</button>
					<img
						src="/business-strategy-project/MainPage/realBurger.png"
						alt=""
						className="getBlock"
					/>
				</div>
			</header>
		</>
	);
};

export default Header;

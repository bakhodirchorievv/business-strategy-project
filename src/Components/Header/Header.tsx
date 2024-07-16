import { Link } from "react-router-dom";

import "./Header.css";
import "./HeaderResponsive.css";
import { useEffect, useRef } from "react";

const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let lastScrollTop = 0;

		const handleScroll = () => {
			const currentScrollTop =
				window.pageYOffset || document.documentElement.scrollTop;

			if (currentScrollTop > lastScrollTop) {
				// Scrolling down
				headerRef.current?.classList.add("hidden");
			} else {
				// Scrolling up
				headerRef.current?.classList.remove("hidden");
			}

			lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	useEffect(() => {
		const overlay = document.querySelector(".overlay");
		const navBarLis = document.querySelectorAll(".nav-bar-li");

		const handleNavItemClick = () => {
			const navBar = document.querySelector(".nav-bar-res");
			navBar?.classList.remove("appear");
			navBar?.classList.add("disappear");
			overlay?.classList.remove("block");
			document.body.classList.remove("overFlowHide");
		};

		navBarLis.forEach((li) => {
			li.addEventListener("click", handleNavItemClick);
		});

		return () => {
			navBarLis.forEach((li) => {
				li.removeEventListener("click", handleNavItemClick);
			});
		};
	}, []);

	const handleClickX = () => {
		const navBar = document.querySelector(".nav-bar-res");
		const overlay = document.querySelector(".overlay");
		navBar?.classList.remove("appear");
		navBar?.classList.add("disappear");
		overlay?.classList.remove("block");
		document.body.classList.remove("overFlowHide");
	};

	const handleClickAppear = () => {
		const navBar = document.querySelector(".nav-bar-res");
		const overlay = document.querySelector(".overlay");
		navBar?.classList.remove("disappear");
		navBar?.classList.add("appear");
		overlay?.classList.add("block");
		document.body.classList.add("overFlowHide");
	};

	const handleOverlay = () => {
		const navBar = document.querySelector(".nav-bar-res");
		const overlay = document.querySelector(".overlay");
		navBar?.classList.remove("appear");
		navBar?.classList.add("disappear");
		overlay?.classList.remove("block");
		document.body.classList.remove("overFlowHide");
	};

	return (
		<>
			<header id="real-main-header" ref={headerRef} className="header">
				<Link to={"/"}>
					<img
						className="head-img"
						src="/business-strategy-project/MainPage/Vector (4).png"
						alt=""
					/>
				</Link>
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
					<button className="overallBtn hasHover head-btn getNone">
						время написать
					</button>
					<img
						onClick={handleClickAppear}
						src="/business-strategy-project/MainPage/realBurger.png"
						alt=""
						className="getBlock"
					/>
				</div>
			</header>

			<div className="nav-bar-res">
				<h2 onClick={handleClickX} className="xButton">
					×
				</h2>
				<img
					src="/business-strategy-project/MainPage/Vector (4).png"
					alt=""
					className="nav-bar-img"
				/>

				<ul className="nav-bar-ul">
					<Link to={"Cases"}>
						<li className="nav-bar-li">Кейсы</li>
					</Link>
					<li className="nav-bar-li">Услуги</li>
					<li className="nav-bar-li">О компании</li>
					<Link to={"Contact"}>
						<li className="nav-bar-li">Контакты</li>
					</Link>
				</ul>
			</div>
			<div onClick={handleOverlay} className="overlay"></div>
		</>
	);
};

export default Header;

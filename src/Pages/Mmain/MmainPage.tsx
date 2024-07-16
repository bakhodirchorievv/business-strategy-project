import { Link } from "react-router-dom";
import "../Mmain/MmainPage.css";
import "../Mmain/Mmresponsive.css";
import { useEffect, useRef, useState } from "react";

const MmainPage = () => {
	//  video controol start
	const mainImages = document.querySelectorAll(".mainImage");
	const handleMouseOver = (e: any) => {
		mainImages.forEach((video) => {
			video.classList.remove("realBlock");
			video.classList.remove("getNoneVideo");
		});

		if (e.target.classList.contains("creativeHover")) {
			mainImages[0].classList.add("getNoneVideo");
			mainImages[1].classList.add("realBlock");
			mainImages[2].classList.add("getNoneVideo");
		} else if (e.target.classList.contains("designHover")) {
			mainImages[0].classList.add("getNoneVideo");
			mainImages[1].classList.add("getNoneVideo");
			mainImages[2].classList.add("realBlock");
		} else if (e.target.classList.contains("mailHover")) {
			mainImages[0].classList.add("realBlock");
			mainImages[1].classList.add("getNoneVideo");
			mainImages[2].classList.add("getNoneVideo");
		}
	};

	const handleMouseLeave = () => {
		mainImages[0].classList.add("realBlock");
		mainImages[1].classList.remove("realBlock");
		mainImages[2].classList.remove("realBlock");
	};

	// custom-cursor start
	useEffect(() => {
		const cursorDot = document.querySelector(".cursor-dot") as HTMLElement;
		const cursorOutline = document.querySelector(
			".cursor-outline"
		) as HTMLElement;
		window.addEventListener("mousemove", (e) => {
			const posX = e.clientX;
			const posY = e.clientY;
			cursorDot.style.left = `${posX}px`;
			cursorDot.style.top = `${posY}px`;

			cursorOutline.style.left = `${posX}px`;
			cursorOutline.style.top = `${posY}px`;

			cursorOutline?.animate(
				{
					left: `${posX}px`,
					top: `${posY}px`,
				},
				{ duration: 500, fill: "forwards" }
			);
		});
	}, []);

	// Add hover effect for pointer elements
	useEffect(() => {
		document.querySelectorAll("*").forEach((el) => {
			el.addEventListener("mouseenter", () => {
				if (window.getComputedStyle(el).cursor === "pointer") {
					document.body.classList.add("pointer-hover");
				}
			});

			el.addEventListener("mouseleave", () => {
				document.body.classList.remove("pointer-hover");
			});
		});
	}, []);

	// animation start
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("show");
				}
			});
		});
		const observer2 = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("toCenter");
				}
			});
		});

		const hiddenElements = document.querySelectorAll(".hidden");
		hiddenElements.forEach((el) => observer.observe(el));
		const fromCenterElements = document.querySelectorAll(".fromCenter");
		fromCenterElements.forEach((el) => observer2.observe(el));

		return () => {
			hiddenElements.forEach((el) => observer.unobserve(el));
			fromCenterElements.forEach((el) => observer2.unobserve(el));
		};
	}, []);

	// text animation start
	const [text, setText] = useState("");
	const fullText = `The media landscape is changing in front of our eyes, and brands need
	 to adapt how they communicate in order to thrive. Motion is the connective tissue between
	  a brand and its audience. It is a vital component of a brand’s platform, evolving
	   its ecosystem and communications in profound new ways.`;
	const timeDescRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setText("");
					const typeText = () => {
						for (let i = 0; i < fullText.length; i++) {
							setTimeout(() => {
								setText((prev) => prev + fullText[i]);
							}, i * 10);
						}
					};
					typeText();
					observer.unobserve(entry.target);
				}
			});
		});

		if (timeDescRef.current) {
			observer.observe(timeDescRef.current);
		}

		return () => {
			if (timeDescRef.current) {
				observer.unobserve(timeDescRef.current);
			}
		};
	}, []);
	// animation end

	// service info events start
	const showServiceInfo = (e: any) => {
		const target = e.target.parentElement.querySelector(".service-info");
		const minus = e.target.parentElement.querySelector(".minus");
		const plus = e.target.parentElement.querySelector(".plus");

		if (target.classList.contains("disappearWithAnimation")) {
			target.classList.remove("disappearWithAnimation");
			target.classList.add("appearWithAnimation");
			minus.classList.remove("disappearWithAnimation");
			plus.classList.add("disappearWithAnimation");
		} else {
			target.classList.add("disappearWithAnimation");
			target.classList.remove("appearWithAnimation");
			minus.classList.add("disappearWithAnimation");
			plus.classList.remove("disappearWithAnimation");
		}
	};
	const showServiceInfo2 = (e: any) => {
		const target =
			e.target.parentElement.parentElement.querySelector(".service-info");
		const minus = e.target.parentElement.parentElement.querySelector(".minus");
		const plus = e.target.parentElement.parentElement.querySelector(".plus");
		if (target.classList.contains("disappearWithAnimation")) {
			target.classList.remove("disappearWithAnimation");
			target.classList.add("appearWithAnimation");
			minus.classList.remove("disappearWithAnimation");
			plus.classList.add("disappearWithAnimation");
		} else {
			target.classList.add("disappearWithAnimation");
			target.classList.remove("appearWithAnimation");
			minus.classList.add("disappearWithAnimation");
			plus.classList.remove("disappearWithAnimation");
		}
	};

	return (
		<>
			<div className="cursor-dot"></div>
			<div className="cursor-outline"></div>
			<div className="bottomOfHeader">
				<div className="hidden">
					<h1 className="head-title hidden">
						<span
							onMouseLeave={handleMouseLeave}
							onMouseOver={handleMouseOver}
							className="forBorder mailHover"
						>
							Стратегия
						</span>{" "}
						<span
							onMouseLeave={handleMouseLeave}
							onMouseOver={handleMouseOver}
							className="forBorder creativeHover"
						>
							Креатив
						</span>{" "}
						<span
							onMouseLeave={handleMouseLeave}
							onMouseOver={handleMouseOver}
							className="forBorder designHover"
						>
							Дизайн 
						</span>
					</h1>
					<p className="head-desc hidden">
						Комплексный подход к разработке коммуникаций между брендом и
						клиентом
					</p>
					<video
						src="/business-strategy-project/MainPage/mail.mp4"
						className="mainImage mailVideo"
						autoPlay
						loop
						muted
					/>
					<video
						src="/business-strategy-project/MainPage/creative.mp4"
						className="mainImage creativeVideo"
						autoPlay
						loop
						muted
					/>
					<video
						src="/business-strategy-project/MainPage/design.mp4"
						className="mainImage designVideo"
						autoPlay
						loop
						muted
					/>
					{
						//<img
						//	src="/business-strategy-project/MainPage/adaptive-headImg.png"
						//	alt=""
						//className="adaptiveImg"
						///>
					}
				</div>
			</div>

			<div className="mainPageWrapper hidden">
				<div className="components-wrapper hidden">
					<div className="components">
						<Link to={"Corporate"}>
							<button className="overallBtn hasHover component-item click-item">
								Фирменный стиль →
							</button>
						</Link>
						<Link to={"BrandStrategy"}>
							<button className="overallBtn hasHover component-item">
								Стратегия →
							</button>
						</Link>
						<Link to={"Descriptor"}>
							<button className="overallBtn hasHover component-item">
								Слоган и дескриптор →
							</button>
						</Link>
						<button className="overallBtn hasHover component-item">
							Ребрендинг →
						</button>

						<button className="overallBtn hasHover component-item">3D →</button>

						<Link to={"MDesign"}>
							<button className="overallBtn hasHover component-item">
								Motio design →
							</button>
						</Link>
						<Link to={"Logo"}>
							<button className="overallBtn hasHover component-item">
								Логотип →
							</button>
						</Link>
						<Link to={"Naming"}>
							<button className="overallBtn hasHover component-item">
								Неймиг →{" "}
							</button>
						</Link>
						<button className="overallBtn hasHover component-item">
							Рекламный креатив →
						</button>
						<Link to={"Site"}>
							<button className="overallBtn hasHover component-item">
								Сайт →
							</button>
						</Link>
					</div>
				</div>

				<div className="timeToWrapper hidden">
					<h2 className="timeToTitle">
						<span className="yellowSide">time to</span> - это команда
						экспертов,повседневная практика показывает, что консультация с
						широким активом
					</h2>

					<div className="timeToBody">
						<div className="timeLeft hidden">
							<p ref={timeDescRef} className="timeDesc">
								{/* The media landscape is changing in front of our eyes, and brands
								need to adapt how they communicate in order to thrive. Motion is
								the connective tissue between a brand and its audience. It is a
								vital component of a brand’s platform, evolving its ecosystem
								and communications in profound new ways. */}
								{text}
							</p>

							<button className="overallBtn hasHover timeBtn hidden">
								время познакомиться →
							</button>
						</div>
						<div className="timeRight hidden">
							<div className="forOrder">
								<div className="timerightItem">
									<p className="numberRight">15+</p>
									<p className="textRight">Человек в команде</p>
								</div>
								<div className="timerightItem ten changePlaceN hidden">
									<p className="numberRight">30+</p>
									<p className="textRight">Успешных проектов</p>
								</div>
								<div className="timerightItem changePlaceB hidden">
									<p className="numberRight">
										<span className="beSmall">100</span>%
									</p>
									<p className="textRight">Эффективности</p>
								</div>
							</div>
							<div className="forOrder">
								<div className="timerightItem">
									<p className="numberRight">10</p>
									<p className="textRight textRight10">
										лет опыта в маркетинге
									</p>
								</div>
								<div className="timerightItem changePlaceN hidden">
									<p className="numberRight">100%</p>
									<p className="textRight">Эффективности</p>
								</div>
								<div className="timerightItem ten changePlaceB hidden">
									<p className="numberRight">30+</p>
									<p className="textRight">Успешных проектов</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="cases-wrapper hidden">
					<h2 className="case-title getBlock overallTitle topTitle">Кейсы</h2>
					<div className="case-left">
						{/* {caseList.length &&
							caseList.slice(0, 3).map((caseItem, index) => (
								<div
									className={`left-case-item fromCenter ${
										index === 2 ? "bigger" : ""
									}`}
									key={caseItem.id}
								>
									<div
										className="whiteBack"
										style={{ backgroundImage: `url(${caseItem.imageUrl})` }}
									></div>
									<h3 className="caseTitle">{caseItem.title || "Valor"}</h3>
									<p className="case-desc">
										{caseItem.desc || "Ювелирные изделия"}
									</p>
									<div className="caseBtnWrapper">
										<button className="overallBtn caseBtn">Логотип</button>
										<button className="overallBtn caseBtn">Брендинг</button>
										<button className="overallBtn caseBtn">Сайт</button>
									</div>
								</div>
							))} */}

						<div className="left-case-item fromCenter">
							<div className="whiteBack"></div>
							<h3 className="caseTitle">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseBtnWrapper">
								<Link to={"Logo"}>
									<button className="overallBtn caseBtn">Логотип</button>
								</Link>
								<button className="overallBtn caseBtn">Брендинг</button>
								<Link to={"Site"}>
									<button className="overallBtn caseBtn">Сайт</button>
								</Link>
							</div>
						</div>
						<div className="left-case-item fromCenter">
							<div className="whiteBack"></div>
							<h3 className="caseTitle">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseBtnWrapper">
								<Link to={"Logo"}>
									<button className="overallBtn caseBtn">Логотип</button>
								</Link>
								<button className="overallBtn caseBtn">Брендинг</button>
								<Link to={"Site"}>
									<button className="overallBtn caseBtn">Сайт</button>
								</Link>
							</div>
						</div>
						<div className="left-case-item fromCenter bigger">
							<div className="whiteBack"></div>
							<h3 className="caseTitle ">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseBtnWrapper">
								<Link to={"Logo"}>
									<button className="overallBtn caseBtn">Логотип</button>
								</Link>
								<button className="overallBtn caseBtn">Брендинг</button>
								<Link to={"Site"}>
									<button className="overallBtn caseBtn">Сайт</button>
								</Link>
							</div>
						</div>
					</div>

					<div className="case-right">
						<h2 className="case-title getNone overallTitle">Кейсы</h2>

						{/* {caseList.length &&
							caseList.slice(3, 5).map((caseItem, index) => (
								<div
									className={`left-case-item fromCenter ${
										index === 2 ? "bigger" : ""
									}`}
									key={caseItem.id}
								>
									<div
										className="whiteBack"
										style={{ backgroundImage: `url(${caseItem.imageUrl})` }}
									></div>
									<h3 className="caseTitle">{caseItem.title || "Valor"}</h3>
									<p className="case-desc">
										{caseItem.desc || "Ювелирные изделия"}
									</p>
									<div className="caseBtnWrapper">
										<button className="overallBtn caseBtn">Логотип</button>
										<button className="overallBtn caseBtn">Брендинг</button>
										<button className="overallBtn caseBtn">Сайт</button>
									</div>
								</div>
							))} */}

						<div className="right-case-item fromCenter bigger getNone">
							<div className="whiteBackRight"></div>
							<h3 className="caseTitle alignToRight">Valor</h3>
							<p className="case-desc alignToRight">
								Сервис аренды недвижимости
							</p>
							<div className="caseBtnWrapper flexEnd">
								<Link to={"Logo"}>
									<button className="overallBtn caseBtn">Логотип</button>
								</Link>
								<button className="overallBtn caseBtn">Брендинг</button>
								<Link to={"Site"}>
									<button className="overallBtn caseBtn">Сайт</button>
								</Link>
							</div>
						</div>
						<div className="right-case-item fromCenter">
							<div className="whiteBackRight"></div>
							<h3 className="caseTitle">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseBtnWrapper">
								<Link to={"Logo"}>
									<button className="overallBtn caseBtn">Логотип</button>
								</Link>
								<button className="overallBtn caseBtn">Брендинг</button>
								<Link to={"Site"}>
									<button className="overallBtn caseBtn">Сайт</button>
								</Link>
							</div>
						</div>

						<button className="overallBtn hasHover moreCaseBtn hidden">
							больше кейсов →
						</button>
					</div>
					<img
						src="/business-strategy-project/MainPage/bckg-layer.png"
						alt=""
						className="bckg-layer hidden getNone"
					/>
				</div>

				<div className="yellow-wrapper fromCenter">
					<div className="yellow-left">
						<h3 className="yellow-title">
							Хочешь подобное для своего бизнеса?
						</h3>

						<button className="overallBtn yellowBtn">
							время познакомиться →
						</button>
					</div>

					<div className="yellow-right">
						<img
							src="/business-strategy-project/MainPage/Vector.png"
							alt=""
							className="yellow-tt-img"
						/>
					</div>
				</div>

				<div className="services-wrapper hidden">
					<h2 className="overallTitle services-title">Услуги</h2>

					<div className="hidden">
						<div className="service-item ">
							<div onClick={showServiceInfo} className="service-item-face">
								<div className="numberWrap">
									<p className="service-num">01</p>
									<h4 className="service-name">Стратегия</h4>
								</div>
								<img
									onClick={showServiceInfo2}
									src="/business-strategy-project/MainPage/plus-icon.png"
									alt=""
									className="plusMinus plus"
								/>
								<img
									onClick={showServiceInfo2}
									src="/business-strategy-project/MainPage/minus-icon.png"
									alt=""
									className="plusMinus minus disappearWithAnimation"
								/>
							</div>
							<div className="service-info disappearWithAnimation">
								<p className="service-desc">
									The media landscape is changing in front of our eyes, and
									brands need to adapt how they communicate in order to thrive.
									Motion is the connective tissue between a brand and its
									audience. It is a vital component of a brand’s platform,
									evolving its ecosystem and communications in profound new
									ways.
								</p>
								<div className="service-btns">
									<Link to={"Logo"}>
										<button className="overallBtn hasHover service-btn">
											Логотип
										</button>
									</Link>
									<Link to={"Corporate"}>
										<button className="overallBtn hasHover service-btn">
											Фирменный стиль
										</button>
									</Link>
									<Link to={"MDesign"}>
										<button className="overallBtn hasHover service-btn">
											Motio design
										</button>
									</Link>
									<Link to={"Site"}>
										<button className="overallBtn hasHover service-btn">
											Сайт
										</button>
									</Link>
									<Link to={"Guideline"}>
										<button className="overallBtn hasHover service-btn">
											Брендбук и гайдлайн
										</button>
									</Link>
									<Link to={"Packing"}>
										<button className="overallBtn hasHover service-btn">
											Упаковка
										</button>
									</Link>
									<button className="overallBtn hasHover service-btn">
										3D
									</button>
									<Link to={"Presentation"}>
										<button className="overallBtn hasHover service-btn">
											Дизайн презентаций
										</button>
									</Link>
									<button className="overallBtn hasHover service-btn">
										Дизайн подписка
									</button>
								</div>
							</div>
						</div>
						<div className="service-item ">
							<div onClick={showServiceInfo} className="service-item-face">
								<div className="numberWrap">
									<p className="service-num">02</p>
									<h4 className="service-name">Креатив</h4>
								</div>
								<img
									onClick={showServiceInfo2}
									src="/business-strategy-project/MainPage/plus-icon.png"
									alt=""
									className="plusMinus plus"
								/>
								<img
									onClick={showServiceInfo2}
									src="/business-strategy-project/MainPage/minus-icon.png"
									alt=""
									className="plusMinus minus disappearWithAnimation"
								/>
							</div>
							<div className="service-info disappearWithAnimation">
								<p className="service-desc">
									The media landscape is changing in front of our eyes, and
									brands need to adapt how they communicate in order to thrive.
									Motion is the connective tissue between a brand and its
									audience. It is a vital component of a brand’s platform,
									evolving its ecosystem and communications in profound new
									ways.
								</p>
								<div className="service-btns">
									<Link to={"Logo"}>
										<button className="overallBtn hasHover service-btn">
											Логотип
										</button>
									</Link>
									<Link to={"Corporate"}>
										<button className="overallBtn hasHover service-btn">
											Фирменный стиль
										</button>
									</Link>
									<Link to={"MDesign"}>
										<button className="overallBtn hasHover service-btn">
											Motio design
										</button>
									</Link>
									<Link to={"Site"}>
										<button className="overallBtn hasHover service-btn">
											Сайт
										</button>
									</Link>
									<Link to={"Guideline"}>
										<button className="overallBtn hasHover service-btn">
											Брендбук и гайдлайн
										</button>
									</Link>
									<Link to={"Packing"}>
										<button className="overallBtn hasHover service-btn">
											Упаковка
										</button>
									</Link>
									<button className="overallBtn hasHover service-btn">
										3D
									</button>
									<Link to={"Presentation"}>
										<button className="overallBtn hasHover service-btn">
											Дизайн презентаций
										</button>
									</Link>
									<button className="overallBtn hasHover service-btn">
										Дизайн подписка
									</button>
								</div>
							</div>
						</div>
						<div className="service-item ">
							<div onClick={showServiceInfo} className="service-item-face">
								<div className="numberWrap">
									<p className="service-num">03</p>
									<h4 className="service-name">Дизайн</h4>
								</div>
								<img
									onClick={showServiceInfo2}
									src="/business-strategy-project/MainPage/plus-icon.png"
									alt=""
									className="plusMinus plus"
								/>
								<img
									onClick={showServiceInfo2}
									src="/business-strategy-project/MainPage/minus-icon.png"
									alt=""
									className="plusMinus minus disappearWithAnimation"
								/>
							</div>
							<div className="service-info disappearWithAnimation">
								<p className="service-desc">
									The media landscape is changing in front of our eyes, and
									brands need to adapt how they communicate in order to thrive.
									Motion is the connective tissue between a brand and its
									audience. It is a vital component of a brand’s platform,
									evolving its ecosystem and communications in profound new
									ways.
								</p>
								<div className="service-btns">
									<Link to={"Logo"}>
										<button className="overallBtn hasHover service-btn">
											Логотип
										</button>
									</Link>
									<Link to={"Corporate"}>
										<button className="overallBtn hasHover service-btn">
											Фирменный стиль
										</button>
									</Link>
									<Link to={"MDesign"}>
										<button className="overallBtn hasHover service-btn">
											Motio design
										</button>
									</Link>
									<Link to={"Site"}>
										<button className="overallBtn hasHover service-btn">
											Сайт
										</button>
									</Link>
									<Link to={"Guideline"}>
										<button className="overallBtn hasHover service-btn">
											Брендбук и гайдлайн
										</button>
									</Link>
									<Link to={"Packing"}>
										<button className="overallBtn hasHover service-btn">
											Упаковка
										</button>
									</Link>
									<button className="overallBtn hasHover service-btn">
										3D
									</button>
									<Link to={"Presentation"}>
										<button className="overallBtn hasHover service-btn">
											Дизайн презентаций
										</button>
									</Link>
									<button className="overallBtn hasHover service-btn">
										Дизайн подписка
									</button>
								</div>
							</div>
						</div>
						<div className="service-foot hidden">
							<p className="service-foot-desc">
								Про то что мы вообще много всего умеем, просто обращайтесь к нам
								и мы придумаем как креативно решить вашу задачу. Про то что мы
								вообще много всего умеем, просто обращайтесь к нам и мы Про то
								что мы вообще много всего умеем, просто обращайтесь
							</p>
							<button className="overallBtn hasHover service-foot-btn ">
								подробнее →
							</button>
						</div>
					</div>
				</div>

				<div className="packing-wrapper hidden">
					<div className="packing-head">
						<h2 className="overallTitle packing-title">Упаковка</h2>

						<p className="packing-desc">
							Выбери оптимально подходящий пакет для своего бизнеса. Эти три
							вида упаковки помогут бла бла бла и так далее и тому подобное.
						</p>
					</div>

					<div className="packing-body hidden">
						<div className="packing-item">
							<h3 className="packing-item-title">Дебют</h3>
							<h3 className="pack-price">150 000 ₽</h3>

							<div className="blackLine"></div>

							<ul className="list-wrapper">
								<li className="packing-list">Логотип</li>
								<li className="packing-list">Фирменный стиль</li>
								<li className="packing-list">Фирменный носители</li>
							</ul>
							<button className=" packing-btn overallBtn">
								Оставить заявку →
							</button>
						</div>
						<div className="packing-item ">
							<h3 className="packing-item-title">Оптимус прайс</h3>
							<h3 className="pack-price">240 000 ₽</h3>

							<div className="blackLine"></div>

							<ul className="list-wrapper">
								<li className="packing-list">Нейминг</li>
								<li className="packing-list">Логотип</li>
								<li className="packing-list">Фирменный стиль</li>
								<li className="packing-list">Фирменные носители</li>
							</ul>
							<button className=" packing-btn overallBtn">
								Оставить заявку →
							</button>
						</div>
						<div className="packing-item">
							<h3 className="packing-item-title">Макси-секси</h3>
							<h3 className="pack-price">500 000 ₽</h3>

							<div className="blackLine"></div>

							<ul className="list-wrapper">
								<li className="packing-list">Бренд-платформа</li>
								<li className="packing-list">Нейминг</li>
								<li className="packing-list">Логотип</li>
								<li className="packing-list">Фирменный стиль</li>
								<li className="packing-list">Фирменный носители</li>
								<li className="packing-list">Бренд-гайд</li>
							</ul>
							<button className=" packing-btn overallBtn">
								Оставить заявку →
							</button>
						</div>
					</div>
				</div>

				<div className="workWith-wrapper hidden">
					<h2 className="overallTitle workWithTitle">Работали с</h2>

					<div className="workWithBody hidden">
						<img
							src="/business-strategy-project/MainPage/screenOfMainImg.png"
							alt=""
							className="workWithImg"
						/>
						{/* <div className="adaptiveParts">
					<div className="adapItemWrap">
						<img
							src="/business-strategy-project/MainPage/partAdaptive1.png"
							alt=""
							className="adaptiveItem"
						/>
						<img
							src="/business-strategy-project/MainPage/partAdaptive2.png"
							alt=""
							className="adaptiveItem"
						/>
					</div>
					<div className="adapItemWrap">
						<img
							src="/business-strategy-project/MainPage/partAdaptive3.png"
							alt=""
							className="adaptiveItem"
						/>
						<img
							src="/business-strategy-project/MainPage/partAdaptive4.png"
							alt=""
							className="adaptiveItem"
						/>
					</div>
				</div> */}
						<img
							src="/business-strategy-project/MainPage/ScreenOfAdaptive.png"
							alt=""
							className="adaptiveParts"
						/>
					</div>
				</div>

				<div className="review-wrapper hidden">
					<div className="review-head">
						<h2 className="review-title overallTitle">Отзывы</h2>

						<div>
							<button className="overallBtn hasHover review-btn ">
								Все отзывы →
							</button>
						</div>
					</div>

					<div className="review-body hidden">
						<div className="body-content">
							<div className="thePerson">
								<div className="person-left">
									<img
										src="/business-strategy-project/MainPage/the-person.png"
										alt=""
										className="person-img"
									/>
									<div className="person-info">
										<h3 className="person-name">Андрей Румянцев</h3>
										<p className="person-desc">
											Генеральный директор, Conect P
										</p>
									</div>
								</div>

								<h2 className="review-numbers">
									04<span className="overall-reviews">/10</span>
								</h2>
							</div>

							<p className="person-thoughts">
								The media landscape is changing in front of our eyes, and brands
								need to adapt how they communicate in order to thrive. Motion is
								the connective tissue between a brand and its audience. It is a
								vital component of a brand’s platform, evolving its ecosystem
								The media landscape is changing in front of
							</p>

							<div className="review-foot">
								<button className=" review-btn1 hasHover overallBtn hidden">
									Читать весь отзыв →
								</button>
								<button className=" review-btn2 hasHover overallBtn hidden">
									Кейс →
								</button>
							</div>
						</div>

						<img
							src="/business-strategy-project/MainPage/arrow-right.svg"
							alt=""
							className="arrow-left"
						/>
						<img
							src="/business-strategy-project/MainPage/arrow-right.svg"
							alt=""
							className="arrow-right"
						/>
					</div>

					<button className="overallBtn review-btn review-btn-b ">
						Все отзывы →
					</button>
				</div>
			</div>
		</>
	);
};

export default MmainPage;

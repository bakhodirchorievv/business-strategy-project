import { Link } from "react-router-dom";
import "../Mmain/MmainPage.css";
import "../Mmain/Mmresponsive.css";

const MmainPage = () => {
	return (
		<>
			<div className="bottomOfHeader">
				<h1 className="head-title">
					<span className="forBorder">Стратегия</span>{" "}
					<span className="forBorder">Креатив</span>{" "}
					<span className="forBorder">Дизайн </span>
				</h1>

				<p className="head-desc">
					Комплексный подход к разработке коммуникаций между брендом и клиентом 
				</p>

				<img
					src="/business-strategy-project/MainPage/MmainPage-img.png"
					alt=""
					className="mainImage"
				/>
				<img
					src="/business-strategy-project/MainPage/adaptive-headImg.png"
					alt=""
					className="adaptiveImg"
				/>
			</div>

			<div className="mainPageWrapper">
				<div className="components-wrapper">
					<div className="components">
						<Link to={"Corporate"}>
							<button className="overallBtn component-item click-item">
								Фирменный стиль →
							</button>
						</Link>
						<Link to={"BrandStrategy"}>
							<button className="overallBtn component-item">Стратегия →</button>
						</Link>
						<Link to={"Descriptor"}>
							<button className="overallBtn component-item">
								Слоган и дескриптор →
							</button>
						</Link>
						<button className="overallBtn component-item">Ребрендинг →</button>

						<button className="overallBtn component-item">3D →</button>

						<Link to={"MDesign"}>
							<button className="overallBtn component-item">
								Motio design →
							</button>
						</Link>
						<Link to={"Logo"}>
							<button className="overallBtn component-item">Логотип →</button>
						</Link>
						<Link to={"Naming"}>
							<button className="overallBtn component-item">Неймиг → </button>
						</Link>
						<button className="overallBtn component-item">
							Рекламный креатив →
						</button>
						<Link to={"Site"}>
							<button className="overallBtn component-item">Сайт →</button>
						</Link>
					</div>
				</div>

				<div className="timeToWrapper">
					<h2 className="timeToTitle">
						<span className="yellowSide">time to</span> -- это команда
						экспертов,повседневная практика показывает, что консультация с
						широким активом
					</h2>

					<div className="timeToBody">
						<div className="timeLeft">
							<p className="timeDesc">
								The media landscape is changing in front of our eyes, and brands
								need to adapt how they communicate in order to thrive. Motion is
								the connective tissue between a brand and its audience. It is a
								vital component of a brand’s platform, evolving its ecosystem
								and communications in profound new ways. 
							</p>

							<button className="overallBtn timeBtn">
								время познакомится →
							</button>
						</div>
						<div className="timeRight">
							<div className="forOrder">
								<div className="timerightItem">
									<p className="numberRight">15+</p>
									<p className="textRight">Человек в команде</p>
								</div>
								<div className="timerightItem ten changePlaceN">
									<p className="numberRight">30+</p>
									<p className="textRight">Успешных проектов</p>
								</div>
								<div className="timerightItem changePlaceB">
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
								<div className="timerightItem changePlaceN">
									<p className="numberRight">100%</p>
									<p className="textRight">Эффективности</p>
								</div>
								<div className="timerightItem ten changePlaceB">
									<p className="numberRight">30+</p>
									<p className="textRight">Успешных проектов</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="cases-wrapper">
					<h2 className="case-title getBlock overallTitle topTitle">Кейсы</h2>
					<div className="case-left">
						<div className="left-case-item">
							<div className="whiteBack"></div>
							<h3 className="caseTitle">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseBtnWrapper">
								<button className="overallBtn caseBtn">Логотип</button>
								<button className="overallBtn caseBtn">Брендинг</button>
								<button className="overallBtn caseBtn">Сайт</button>
							</div>
						</div>
						<div className="left-case-item">
							<div className="whiteBack"></div>
							<h3 className="caseTitle">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseBtnWrapper">
								<button className="overallBtn caseBtn">Логотип</button>
								<button className="overallBtn caseBtn">Брендинг</button>
								<button className="overallBtn caseBtn">Сайт</button>
							</div>
						</div>
						<div className="left-case-item bigger">
							<div className="whiteBack"></div>
							<h3 className="caseTitle ">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseBtnWrapper">
								<button className="overallBtn caseBtn">Логотип</button>
								<button className="overallBtn caseBtn">Брендинг</button>
								<button className="overallBtn caseBtn">Сайт</button>
							</div>
						</div>
					</div>

					<div className="case-right">
						<h2 className="case-title getNone overallTitle">Кейсы</h2>

						<div className="right-case-item bigger getNone">
							<div className="whiteBackRight"></div>
							<h3 className="caseTitle alignToRight">Valor</h3>
							<p className="case-desc alignToRight">
								Сервис аренды недвижимости
							</p>
							<div className="caseBtnWrapper flexEnd">
								<button className="overallBtn caseBtn">Логотип</button>
								<button className="overallBtn caseBtn">Брендинг</button>
								<button className="overallBtn caseBtn">Сайт</button>
							</div>
						</div>
						<div className="right-case-item">
							<div className="whiteBackRight"></div>
							<h3 className="caseTitle">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseBtnWrapper">
								<button className="overallBtn caseBtn">Логотип</button>
								<button className="overallBtn caseBtn">Брендинг</button>
								<button className="overallBtn caseBtn">Сайт</button>
							</div>
						</div>
						<button className="overallBtn moreCaseBtn ">больше кейсов →</button>
					</div>
					<img
						src="/business-strategy-project/MainPage/bckg-layer.png"
						alt=""
						className="bckg-layer getNone"
					/>
				</div>

				<div className="yellow-wrapper">
					<div className="yellow-left">
						<h3 className="yellow-title">
							Хочешь подобное для своего бизнеса?
						</h3>

						<button className="overallBtn yellowBtn">
							время познакомится →
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

				<div className="services-wrapper">
					<h2 className="overallTitle services-title">Услуги</h2>

					<div className="service-item">
						<div className="service-item-face">
							<div className="numberWrap">
								<p className="service-num">01</p>
								<h4 className="service-name">Стратегия</h4>
							</div>
							<img
								src="/business-strategy-project/MainPage/plus-icon.png"
								alt=""
								className="plusMinus plus"
							/>
						</div>
					</div>
					<div className="service-item">
						<div className="service-item-face">
							<div className="numberWrap">
								<p className="service-num">02</p>
								<h4 className="service-name">Креатив</h4>
							</div>
							<img
								src="/business-strategy-project/MainPage/plus-icon.png"
								alt=""
								className="plusMinus plus"
							/>
						</div>
					</div>
					<div className="service-item">
						<div className="service-item-face">
							<div className="numberWrap">
								<p className="service-num">03</p>
								<h4 className="service-name">Дизайн</h4>
							</div>
							<img
								src="/business-strategy-project/MainPage/minus-icon.png"
								alt=""
								className="plusMinus minus"
							/>
						</div>

						<div className="service-info">
							<p className="service-desc">
								The media landscape is changing in front of our eyes, and brands
								need to adapt how they communicate in order to thrive. Motion is
								the connective tissue between a brand and its audience. It is a
								vital component of a brand’s platform, evolving its ecosystem
								and communications in profound new ways. 
							</p>

							<div className="service-btns">
								<Link to={"Logo"}>
									<button className="overallBtn service-btn">Логотип</button>
								</Link>
								<Link to={"Corporate"}>
									<button className="overallBtn service-btn">
										Фирменный стиль
									</button>
								</Link>
								<Link to={"MDesign"}>
									<button className="overallBtn service-btn">
										Motio design
									</button>
								</Link>
								<Link to={"Site"}>
									<button className="overallBtn service-btn">Сайт</button>
								</Link>
								<Link to={"Guideline"}>
									<button className="overallBtn service-btn">
										Брендбук и гайдлайн
									</button>
								</Link>
								<Link to={"Packing"}>
									<button className="overallBtn service-btn">Упаковка</button>
								</Link>
								<button className="overallBtn service-btn">3D</button>
								<Link to={"Presentation"}>
									<button className="overallBtn service-btn">
										Дизайн презентаций
									</button>
								</Link>
								<button className="overallBtn service-btn">
									Дизайн подписка
								</button>
							</div>
						</div>
					</div>

					<div className="service-foot">
						<p className="service-foot-desc">
							Про то что мы вообще много всего умеем, просто обращайтесь к нам и
							мы придумаем как креативно решить вашу задачу. Про то что мы
							вообще много всего умеем, просто обращайтесь к нам и мы Про то что
							мы вообще много всего умеем, просто обращайтесь
						</p>

						<button className="overallBtn service-foot-btn overallBtn">
							подробнее →
						</button>
					</div>
				</div>

				<div className="packing-wrapper">
					<div className="packing-head">
						<h2 className="overallTitle packing-title">Упаковка</h2>

						<p className="packing-desc">
							Выбери оптимально подходящий пакет для своего бизнеса. Эти три
							вида упаковки помогут бла бла бла и так далее и тому подобное.
						</p>
					</div>

					<div className="packing-body">
						<div className="packing-item">
							<h3 className="packing-item-title">Дебют</h3>
							<h3 className="pack-price">150 000 ₽</h3>

							<div className="blackLine"></div>

							<ul className="list-wrapper">
								<li className="packing-list">Логотип</li>
								<li className="packing-list">Фирменный стиль</li>
								<li className="packing-list">Фирменный носители</li>
							</ul>
							<button className="overallBtn packing-btn overallBtn">
								Оставить заявку →
							</button>
						</div>
						<div className="packing-item click-packing">
							<h3 className="packing-item-title">Оптимус прайс</h3>
							<h3 className="pack-price">240 000 ₽</h3>

							<div className="blackLine"></div>

							<ul className="list-wrapper">
								<li className="packing-list">Нейминг</li>
								<li className="packing-list">Логотип</li>
								<li className="packing-list">Фирменный стиль</li>
								<li className="packing-list">Фирменные носители</li>
							</ul>
							<button className="overallBtn packing-btn overallBtn">
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
							<button className="overallBtn packing-btn overallBtn">
								Оставить заявку →
							</button>
						</div>
					</div>
				</div>

				<div className="workWith-wrapper">
					<h2 className="overallTitle workWithTitle">Работали с</h2>

					<div className="workWithBody">
						<img
							src="/business-strategy-project/MainPage/workWithBody.png"
							alt=""
							className="workWithImg"
						/>
						<div className="adaptiveParts">
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
						</div>
					</div>
				</div>

				<div className="review-wrapper">
					<div className="review-head">
						<h2 className="review-title overallTitle">Отзывы</h2>

						<div>
							<button className="overallBtn review-btn ">Все отзывы →</button>
						</div>
					</div>

					<div className="review-body">
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
								<button className="overallBtn review-btn1 overallBtn">
									Читать весь отзыв →
								</button>
								<button className="overallBtn review-btn2 overallBtn">
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

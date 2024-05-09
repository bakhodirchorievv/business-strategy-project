import Logics from "./MainPageLogics";
import "./MainPage.css";
import "./Responsive.css";

const MainPage = () => {
	return (
		<>
			<header className="header">
				<img
					className="head-img"
					src="/business-strategy-project/MainPage/Vector (4).png"
					alt=""
				/>
				<ul className="ul-wrapper getNone">
					<li className="list-item head-case">Кейсы</li>
					<li className="list-item head-service">Услуги</li>
					<li className="list-item head-company">О компании</li>
					<li className="list-item head-contact">Контакты</li>
				</ul>
				<div className="header-burger">
					<button className="header-btn head-btn">время написать</button>
					<div className="burgerDiv getBlock">=</div>
				</div>
			</header>

			<div className="mainPageWrapper">
				<div className="main-wrapper">
					<div className="header-wrapper">
						<div className="element-wrapper">
							<img
								src="/business-strategy-project/MainPage/элементы.png"
								alt=""
								className="elements"
							/>
							<div className="img-btns-wrapper">
								<p className="btn-desc">Давайте обсудим ваш проект</p>
								<img
									src="/business-strategy-project/MainPage/Component 4.png"
									alt=""
									className="img-btn"
								/>
							</div>
						</div>
					</div>

					<div className="components">
						<img
							src="/business-strategy-project/MainPage/Component 1.png"
							alt=""
							className="components-item"
						/>
						<img
							src="/business-strategy-project/MainPage/Component 2.png"
							alt=""
							className="components-item"
						/>
						<img
							src="/business-strategy-project/MainPage/Component 3 (2).png"
							alt=""
							className="components-item"
						/>
						<img
							src="/business-strategy-project/MainPage/Group 18.png"
							alt=""
							className="components-item"
						/>
						<img
							src="/business-strategy-project/MainPage/Group 19.png"
							alt=""
							className="components-item"
						/>
						<img
							src="/business-strategy-project/MainPage/Group 14.png"
							alt=""
							className="components-item"
						/>
						<img
							src="/business-strategy-project/MainPage/Group 15.png"
							alt=""
							className="components-item"
						/>
						<img
							src="/business-strategy-project/MainPage/Group 17.png"
							alt=""
							className="components-item"
						/>
						<img
							src="/business-strategy-project/MainPage/Group 19 (1).png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/Group 20.png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/component9.png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/component10.png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/component11.png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/component12.png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/component13.png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/component14.png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/component15.png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/component16.png"
							alt=""
							className="components-item getNone"
						/>
						<img
							src="/business-strategy-project/MainPage/component17.png"
							alt=""
							className="components-item getNone"
						/>

						<img
							src="/business-strategy-project/MainPage/component-thunder.png"
							alt=""
							className="component-thunder"
						/>
					</div>
				</div>

				<img
					src="/business-strategy-project/MainPage/text (2).png"
					alt=""
					className="text-img"
				/>

				<div className="timeToWrapper">
					<div className="leftTimeTo">
						<div className="timeText">
							<img
								src="/business-strategy-project/MainPage/timeToTitle.png"
								alt=""
								className="timeto-title"
							/>

							<p className="timeDesc">
								это команда экспертов, повседневная практика показывает, что
								консультация с широким активом
							</p>
							<p className="timeDesc2">
								The media landscape is changing in front of our eyes, and brands
								need to adapt how they communicate in order to thrive. Motion is
								the connective tissue between a brand and its audience. It is a
								vital component of a brand’s platform, evolving its ecosystem
								and communications in profound new ways. 
							</p>
						</div>

						<button className="introductionBtn header-btn">
							Время познакомиться
						</button>
					</div>

					<div className="rightTimeTo">
						<div className="valueCardWrap">
							<img
								src="/business-strategy-project/MainPage/value 2.png"
								alt=""
								className="right-item"
							/>
							<img
								src="/business-strategy-project/MainPage/value 01.png"
								alt=""
								className="right-item"
							/>
							<img
								src="/business-strategy-project/MainPage/value 4.png"
								alt=""
								className="right-item"
							/>
							<img
								src="/business-strategy-project/MainPage/value 3.png"
								alt=""
								className="right-item"
							/>
						</div>

						<div className="layer-wrap">
							<img
								src="/business-strategy-project/MainPage/Union.png"
								alt=""
								className="layer"
							/>
						</div>
					</div>
				</div>

				<div className="cases-wrapper">
					<div className=" getBlock firstCaseTitle">
						<img
							src="/business-strategy-project/MainPage/case-real-title.png"
							alt=""
						/>
					</div>
					<div className="case-left">
						<div className="left-case-item">
							<div className="whiteBack"></div>
							<h3 className="caseTitle">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseImgWrapper">
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
								/>
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/site.png"
									alt=""
								/>
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
								/>
							</div>
						</div>
						<div className="right-case-item getBlock">
							<div className="whiteBackRight"></div>
							<h3 className="caseTitle">Hoamly</h3>
							<p className="case-desc">Сервис аренды недвижимости</p>
							<div className="caseImgWrapper rightImages">
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
								/>
								<img
									className="case-img getNone"
									src="/business-strategy-project/MainPage/site.png"
									alt=""
								/>
								<img
									className="case-img getInline"
									src="/business-strategy-project/MainPage/site.png"
									alt=""
								/>
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
								/>
							</div>
						</div>
						<div className="left-case-item">
							<div className="whiteBack small"></div>
							<h3 className="caseTitle">Пропорция</h3>
							<p className="case-desc">Салон красоты</p>
							<div className="caseImgWrapper">
								<img
									className="case-img getInline"
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
								/>
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/site.png"
									alt=""
								/>
								<img
									className="case-img getInline"
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
								/>
							</div>
						</div>
						<div className="left-case-item getBlock">
							<div className="whiteBack"></div>
							<h3 className="caseTitle">Valor</h3>
							<p className="case-desc">Ювелирные изделия</p>
							<div className="caseImgWrapper">
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
								/>
								<img
									className="case-img getNone"
									src="/business-strategy-project/MainPage/site.png"
									alt=""
								/>
								<img
									className="case-img getInline"
									src="/business-strategy-project/MainPage/site.png"
									alt=""
								/>
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
								/>
							</div>
						</div>
						<div className="left-case-item getNone">
							<div className="whiteBack small"></div>
							<h3 className="caseTitle ">Пропорция</h3>
							<p className="case-desc">Салон красоты</p>
							<div className="caseImgWrapper">
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/site.png"
									alt=""
								/>
							</div>
						</div>
						<button className="moreCaseBtn header-btn getBlock">
							больше кейсов →
						</button>
					</div>

					<div className="case-right getNone">
						<div className="case-title-wrap getNone">
							<img
								src="/business-strategy-project/MainPage/case-real-title.png"
								alt=""
							/>
						</div>

						<div className="right-case-item">
							<div className="whiteBackRight"></div>
							<h3 className="caseTitle">Hoamly</h3>
							<p className="case-desc">Сервис аренды недвижимости</p>
							<div className="caseImgWrapper rightImages">
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
								/>
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/firmenniy-style.png"
									alt=""
								/>
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
								/>
							</div>
						</div>
						<div className="right-case-item">
							<div className="whiteBackRight"></div>
							<h3 className="caseTitle">Hoamly</h3>
							<p className="case-desc">Сервис аренды недвижимости</p>
							<div className="caseImgWrapper rightImages">
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
								/>
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/firmenniy-style.png"
									alt=""
								/>
								<img
									className="case-img"
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
								/>
							</div>
						</div>
						<button className="moreCaseBtn header-btn">больше кейсов →</button>
					</div>
				</div>

				<div className="yellow-wrapper">
					<div className="yellow-left">
						<h3 className="yellow-title">
							Хочешь подобное для своего бизнеса?
						</h3>
						<img
							src="/business-strategy-project/MainPage/asaf sdag.png"
							alt=""
							className="yellow-left-img"
						/>
						<button className="yellowBtn">время написать</button>
					</div>

					<div className="yellow-right">
						<img
							src="/business-strategy-project/MainPage/Vector.png"
							alt=""
							className="yellow-tt-img"
						/>
						<img
							src="/business-strategy-project/MainPage/Rectangle 64.png"
							alt=""
							className="circle"
						/>
						<img
							src="/business-strategy-project/MainPage/Vector 27.png"
							alt=""
							className="string"
						/>
						<img
							src="/business-strategy-project/MainPage/Vector 34.png"
							alt=""
							className="fold"
						/>
						<img
							src="/business-strategy-project/MainPage/Vector 33.png"
							alt=""
							className="nextToFold"
						/>
						<img
							src="/business-strategy-project/MainPage/Vector 32.png"
							alt=""
							className="foldShadow"
						/>
					</div>
				</div>

				<div className="services-wrapper">
					<div className="services-title-wrap">
						<img
							src="/business-strategy-project/MainPage/service-title.png"
							alt=""
							className="service-main-title"
						/>
					</div>

					<div className="service-item">
						<div className="service-item-face">
							<div className="numberWrap">
								<img
									src="/business-strategy-project/MainPage/01.png"
									alt=""
									className="service-num"
								/>
								<h4 className="service-name">Стратегия</h4>
							</div>
							<h2 className="plus-minus">+</h2>
						</div>
					</div>
					<div className="service-item">
						<div className="service-item-face">
							<div className="numberWrap">
								<img
									src="/business-strategy-project/MainPage/02.png"
									alt=""
									className="service-num"
								/>
								<h4 className="service-name">Креатив</h4>
							</div>
							<h2 className="plus-minus">+</h2>
						</div>
					</div>
					<div className="service-item">
						<div className="service-item-face">
							<div className="numberWrap">
								<img
									src="/business-strategy-project/MainPage/03.png"
									alt=""
									className="service-num"
								/>
								<h4 className="service-name">Дизайн</h4>
							</div>
							<h2 className="plus-minus minus">-</h2>
						</div>

						<div className="service-info">
							<p className="service-desc">
								The media landscape is changing in front of our eyes, and brands
								need to adapt how they communicate in order to thrive. Motion is
								the connective tissue between a brand and its audience. It is a
								vital component of a brand’s platform, evolving its ecosystem
								and communications in profound new ways. 
							</p>

							<div className="service-images">
								<img
									src="/business-strategy-project/MainPage/firmenniy-style.png"
									alt=""
									className="service-img"
								/>
								<img
									src="/business-strategy-project/MainPage/3d.png"
									alt=""
									className="service-img"
								/>
								<img
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
									className="service-img"
								/>
								<img
									src="/business-strategy-project/MainPage/site.png"
									alt=""
									className="service-img"
								/>
								<img
									src="/business-strategy-project/MainPage/motio-design.png"
									alt=""
									className="service-img"
								/>
								<img
									src="/business-strategy-project/MainPage/brendbook.png"
									alt=""
									className="service-img"
								/>
								<img
									src="/business-strategy-project/MainPage/packing.png"
									alt=""
									className="service-img"
								/>
								<img
									src="/business-strategy-project/MainPage/design.png"
									alt=""
									className="service-img"
								/>
								<img
									src="/business-strategy-project/MainPage/design-padpiska.png"
									alt=""
									className="service-img"
								/>
							</div>
						</div>
					</div>

					<div className="service-foot">
						<p className="service-foot-desc">
							мы вообще много всего умеем, просто обращайтесь к нам и мы
							придумаем как креативно решить вашу задачу.
						</p>

						<button className="service-foot-btn header-btn">подробнее →</button>
					</div>
				</div>

				<div className="packing-wrapper">
					<div className="packing-head">
						<div>
							<img
								src="/business-strategy-project/MainPage/packing-title.png"
								alt=""
								className="packing-title"
							/>
						</div>

						<p className="packing-desc">
							Выбери оптимально подходящий пакет для своего бизнеса. Эти три
							вида упаковки помогут вам в выборе
						</p>
					</div>

					<div className="packing-body">
						<div className="packing-item">
							<h3 className="packing-item-title">Дебют</h3>
							<ul className="list-wrapper">
								<li className="packing-list">Логотип</li>
								<li className="packing-list">Фирменный стиль</li>
								<li className="packing-list">Фирменный носители</li>
							</ul>
							<button className="packing-btn header-btn">
								Оставить заявку
							</button>
							<img
								src="/business-strategy-project/MainPage/Group 531.png"
								alt=""
								className="lightning"
							/>
						</div>
						<div className="packing-item">
							<h3 className="packing-item-title">Оптимус</h3>
							<ul className="list-wrapper">
								<li className="packing-list">Нейминг</li>
								<li className="packing-list">Логотип</li>
								<li className="packing-list">Фирменный стиль</li>
								<li className="packing-list">Фирменные носители</li>
							</ul>
							<button className="packing-btn header-btn">
								Оставить заявку
							</button>
							<img
								src="/business-strategy-project/MainPage/Group 531 (1).png"
								alt=""
								className="lightning"
							/>
						</div>
						<div className="packing-item">
							<h3 className="packing-item-title">МАКСИ</h3>
							<ul className="list-wrapper">
								<li className="packing-list">Бренд-платформа</li>
								<li className="packing-list">Нейминг</li>
								<li className="packing-list">Логотип</li>
								<li className="packing-list">Фирменный стиль</li>
								<li className="packing-list">Фирменный носители</li>
								<li className="packing-list">Бренд-гайд</li>
							</ul>
							<button className="packing-btn header-btn">
								Оставить заявку
							</button>
							<img
								src="/business-strategy-project/MainPage/Group 531 (2).png"
								alt=""
								className="lightning"
							/>
						</div>
					</div>
				</div>

				<div className="workWith-wrapper">
					<h3 className="workWithTitle">Работали с</h3>

					<div className="workWithBody">
						<img
							src="/business-strategy-project/MainPage/work-with-1.png"
							alt=""
							className="workWithItem"
						/>
						<img
							src="/business-strategy-project/MainPage/work-with-2.png"
							alt=""
							className="workWithItem"
						/>
						<img
							src="/business-strategy-project/MainPage/work-with-3.png"
							alt=""
							className="workWithItem"
						/>
						<img
							src="/business-strategy-project/MainPage/work-with-4.png"
							alt=""
							className="workWithItem"
						/>
						<img
							src="/business-strategy-project/MainPage/work-with-5.png"
							alt=""
							className="workWithItem"
						/>
					</div>
				</div>

				<div className="review-wrapper">
					<div className="review-head">
						<div className=" review-title">
							<img
								src="/business-strategy-project/MainPage/review-real-title.png"
								alt=""
							/>
						</div>

						<div>
							<button className="review-btn header-btn">Все отзывы</button>
						</div>
					</div>

					<div className="review-body">
						<div className="indexMinus"></div>
						<div className="indexZero"></div>
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
								<button className="review-btn1 header-btn">
									Читать весь отзыв →
								</button>
								<button className="review-btn2 header-btn">Кейс</button>
							</div>
						</div>

						<img
							src="/business-strategy-project/MainPage/arrow-left.svg"
							alt=""
							className="arrow-left"
						/>
						<img
							src="/business-strategy-project/MainPage/arrow-right.svg"
							alt=""
							className="arrow-right"
						/>
					</div>
				</div>
			</div>

			<div className="contacts-wrapper">
				<div className="contact-left">
					<h1 className="contact-title">
						/Наши <span className="yellow-contact">контактные</span> данные
					</h1>

					<ul className="ul-contact">
						<li className="contact-name">Телефон</li>
						<li className="exact-info">+7 999 710-39-95</li>
					</ul>
					<ul className="ul-contact">
						<li className="contact-name">Адрес</li>
						<li className="exact-info">Санкт-Петербург</li>
					</ul>
					<ul className="ul-contact">
						<li className="contact-name">Социальные-сети</li>
						<li className="exact-info">WhatsApp</li>
						<li className="exact-info">Telegramm</li>
						<li className="exact-info">VK</li>
					</ul>
				</div>

				<div className="contact-right">
					<img
						src="/business-strategy-project/MainPage/Vector (8).png"
						alt=""
						className="contact-right-img"
					/>
				</div>

				<img
					src="/business-strategy-project/MainPage/thunder.png"
					alt=""
					className="thunder"
				/>
				<img
					src="/business-strategy-project/MainPage/Sticky.png"
					alt=""
					className="sticky"
				/>
				<img
					src="/business-strategy-project/MainPage/Vector 32.png"
					alt=""
					className="vector-contact"
				/>
				<img
					src="/business-strategy-project/MainPage/Vector 33.png"
					alt=""
					className="vector-contact"
				/>
				<img
					src="/business-strategy-project/MainPage/Vector 34.png"
					alt=""
					className="vector-contact"
				/>
				<img
					src="/business-strategy-project/MainPage/Rectangle 64.png"
					alt=""
					className="circle"
				/>
			</div>

			<div className="about-company-wrapper">
				<img
					src="/business-strategy-project/MainPage/about-company-image.png"
					alt=""
					className="about-company-img"
				/>
			</div>

			<div className="ready-cases-wrapper">
				<img
					src="/business-strategy-project/MainPage/cases-image.png"
					alt=""
					className="ready-case-img"
				/>

				<div className="cards-wrapper">
					<div className="card-item">
						<div className="empty-place"></div>
						<div className="card-bottom">
							<h2 className="valor">Valor</h2>
							<p className="valor-desc">Ювелирные изделия</p>

							<div className="card-images">
								<img
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/site.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
									className="card-img-item"
								/>
							</div>
						</div>
					</div>
					<div className="card-item">
						<div className="empty-place"></div>
						<div className="card-bottom">
							<h2 className="valor">Valor</h2>
							<p className="valor-desc">Ювелирные изделия</p>

							<div className="card-images">
								<img
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/site.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
									className="card-img-item"
								/>
							</div>
						</div>
					</div>
					<div className="card-item">
						<div className="empty-place"></div>
						<div className="card-bottom">
							<h2 className="valor">Valor</h2>
							<p className="valor-desc">Ювелирные изделия</p>

							<div className="card-images">
								<img
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/site.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
									className="card-img-item"
								/>
							</div>
						</div>
					</div>
					<div className="card-item">
						<div className="empty-place"></div>
						<div className="card-bottom">
							<h2 className="valor">Valor</h2>
							<p className="valor-desc">Ювелирные изделия</p>

							<div className="card-images">
								<img
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/site.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
									className="card-img-item"
								/>
							</div>
						</div>
					</div>
					<div className="card-item">
						<div className="empty-place"></div>
						<div className="card-bottom">
							<h2 className="valor">Valor</h2>
							<p className="valor-desc">Ювелирные изделия</p>

							<div className="card-images">
								<img
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/site.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
									className="card-img-item"
								/>
							</div>
						</div>
					</div>
					<div className="card-item">
						<div className="empty-place"></div>
						<div className="card-bottom">
							<h2 className="valor">Valor</h2>
							<p className="valor-desc">Ювелирные изделия</p>

							<div className="card-images">
								<img
									src="/business-strategy-project/MainPage/Group 15.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/site.png"
									alt=""
									className="card-img-item"
								/>
								<img
									src="/business-strategy-project/MainPage/Logotip.png"
									alt=""
									className="card-img-item"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<footer className="footer">
				<div className="footer-left">
					<div className=" vremya">
						<img
							src="/business-strategy-project/MainPage/foot-main-img.png"
							alt=""
						/>
					</div>

					<div className="titlle">
						<img src="/business-strategy-project/MainPage/Titlle.png" alt="" />
					</div>

					<div className="foot-left-bottom">
						<ul className="bottom-ul">
							<li className="bottom-list white-bottom list-item head-case">
								Кейсы
							</li>
							<li className="bottom-list list-item head-service">Услуги</li>
							<li className="bottom-list list-item head-company">О компании</li>
							<li className="bottom-list list-item head-contact">Контакты</li>
						</ul>

						<div className="apps-wrapper">
							<div className="app-logos">
								<img
									src="/business-strategy-project/MainPage/Vector (1).png"
									alt=""
									className="app-logo"
								/>
								<img
									src="/business-strategy-project/MainPage/Vector (2).png"
									alt=""
									className="app-logo"
								/>
								<img
									src="/business-strategy-project/MainPage/Vector (3).png"
									alt=""
									className="app-logo"
								/>
							</div>

							<p className="location">
								©️ 2024, time to agency Санкт-Петербург, м. Адмиралтейская, ул.
								Большая Морская, д. 46, оф. 777
							</p>
						</div>
					</div>
				</div>

				<div className="footer-right">
					<div className=" zayavku">
						<img
							src="/business-strategy-project/MainPage/footer-zayavku.png"
							alt=""
							className="getInline"
						/>
						<img
							src="/business-strategy-project/MainPage/big-zayavku.png"
							alt=""
							className="getNone"
						/>
					</div>

					<div className="inputs-wrapper">
						<input type="text" className="name-input input" placeholder="Имя" />
						<input
							type="text"
							className="phone-input input"
							placeholder="Телефон"
						/>
					</div>

					<div className="send-wrapper">
						<button className="send-btn header-btn">Отправить</button>
						<p className="send-desc">
							Оставьте заявку и мы свяжемся с Вами в ближайшее время
						</p>
					</div>
				</div>

				<img
					src="/business-strategy-project/MainPage/Rectangle 72.png"
					alt=""
					className="foot-fold"
				/>
				<img
					src="/business-strategy-project/MainPage/shadow.png"
					alt=""
					className="foot-shadow"
				/>
			</footer>

			<div className="background-effect">
				<div></div>
			</div>
			<Logics />
		</>
	);
};

export default MainPage;

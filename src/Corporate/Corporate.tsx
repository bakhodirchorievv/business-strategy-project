import "./Corporate.css";
import "./CorporateResponsive.css";

const Corporate = () => {
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

			<div className="corporate-wrapper">
				<div className="innerHead">
					<h2 className="main-title">
						Фирменный стиль для вашего{" "}
						<span className="yellowFont">бизнеса</span>
					</h2>
					<p className="title-desc">
						Создание уникального образа для вашего для вашего продукта или
						услуги в течение
					</p>
				</div>

				<div className="first-part">
					<h3 className="generalTitle first-title">
						Что такое фирменный стиль?
					</h3>
					<p className="firstSectionDesc">
						Фирменный стиль — это комплексный подход к созданию
						идентификационных элементов бренда, таких как логотип, цветовая
						палитра, шрифты и дизайн. Он направлен на установление узнаваемости
						и формирование уникального образа вашего бренда в глазах
						потребителей. Фирменный стиль – первое, на что обращают внимание
						потребители при контакте с вашим бизнесом. 
					</p>

					<div className="firstImgWrap">
						<img
							src="/business-strategy-project/MainPage/corporate-main-img.png"
							alt=""
							className="firstSectionImg"
						/>
					</div>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">Фирменный стиль решает!</h3>
					<div className="second-body">
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">01</h3>
								<p className="flashDesc">
									Качественный и стильный дизайн вашего бренда создаст
									дополнительную стоимость для ваших товаров и услуг, делая их
									более привлекательными для потребителей.
								</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">02</h3>
								<p className="flashDesc">
									Созданный нами уникальный фирменный стиль поможет вашей
									компании выделиться среди конкурентов и привлечь больше
									внимания к вашему бренду на рынке
								</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">03</h3>
								<p className="flashDesc">
									Мы создадим визуальный образ, который поможет быстрее
									запомнить ваш бренд и легко узнавать его среди других в вашей
									индустрии.
								</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">04</h3>
								<p className="flashDesc">
									Фирменный стиль позволяет создать доверительный образ компании
									и поддержать ее имидж, что способствует укреплению доверия
									клиентов и партнеров к вашему бренду.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="third-part">
					<h3 className="generalTitle thirdTitle">О нас</h3>
					<p className="thirdDesc">
						Наша компания - эксперт в области маркетинга и брендинга,
						специализирующийся на разработке уникального фирменного стиля для
						вашего бизнеса и медиа. В условиях жесткой конкуренции необходимо
						создавать образ, который запоминается и выделяется среди других.
					</p>
					<p className="thirdDesc">
						Наша компания - эксперт в области маркетинга и брендинга,
						специализирующийся на разработке уникального фирменного стиля для
						вашего бизнеса и медиа. В условиях жесткой конкуренции необходимо
						создавать образ, который запоминается и выделяется среди других.
					</p>
					<p className="thirdDesc">
						Мы предлагаем Вам разработку индивидуального и эффектного фирменного
						стиля, который не только поможет Вам выделиться на рынке, но и стать
						узнаваемым брендом, который будет привлекать внимание!
					</p>

					<div className="third-body">
						<img
							src="/business-strategy-project/MainPage/corporateFirst.png"
							alt=""
							className="thirdBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/corporateSecond.png"
							alt=""
							className="thirdBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/corporateThird.png"
							alt=""
							className="thirdBodyImg"
						/>
					</div>
				</div>

				<div className="fourth-part">
					<h3 className="generalTitle">
						Всего 5 шагов на пути к эффектному фирменному стилю
					</h3>

					<div className="fourthSectionBody">
						<div className="fourthBodyItem">
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Сформируем бриф</h4>
								<p className="fourthInnerDesc">
									Начнем с четкого определения целей проекта, чтобы разработать
									эффективный визуальный образ, который будет идеально
									соответствовать вашим целям и ожиданиям.
								</p>
							</div>
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Проведем аудит</h4>
								<p className="fourthInnerDesc">
									Затем мы проведем анализ рынка, особенностей отрасли и
									детальный обзор конкурентов. Это позволит нам выявить
									уникальные возможности для создания стиля вашего бренда.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem ">
							<div className="fourthInnerItem TwoInOne">
								<h4 className="fourthInnerTitle">Создадим брендбук</h4>
								<p className="fourthInnerDesc">
									Завершающим этапом будет создание брендбука. Этот документ
									поможет избежать ошибок при самостоятельной работе с
									айдентикой и обеспечит ее постоянство и эффективность в
									долгосрочной перспективе.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">
									Запустим творческий процесс
								</h4>
								<p className="fourthInnerDesc">
									Наша команда создаст и предоставит вам 3 варианта фирменного
									стиля, учитывая полученные результаты анализа и ваши
									предпочтения
								</p>
							</div>
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Сделаем финальные штрихи</h4>
								<p className="fourthInnerDesc">
									После выбора оптимального варианта мы приступим к развитию
									стиля на различных носителях бренда и, при необходимости,
									внесем корректировки для достижения идеального результата.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="fifth-part">
					<h3 className="generalTitle fifth-title">Нам доверяют</h3>
					<img
						src="/business-strategy-project/MainPage/fifth-image.png"
						alt=""
						className="fifthMainImg"
					/>
					<div className="fifth-foot">
						<div className="fifth-foot-item">
							<img
								src="/business-strategy-project/MainPage/fifth-first.png"
								alt=""
								className="fifth-foot-img"
							/>
							<div>
								<p className="fifth-foot-desc">
									Работаем в индустрии брендинга с года
								</p>
							</div>
						</div>
						<div className="fifth-foot-item">
							<img
								src="/business-strategy-project/MainPage/fifth-second.png"
								alt=""
								className="fifth-foot-img"
							/>
							<div>
								<p className="fifth-foot-desc">Реализовано более проектов</p>
							</div>
						</div>
						<div className="fifth-foot-item">
							<img
								src="/business-strategy-project/MainPage/fifth-third.png"
								alt=""
								className="fifth-foot-img"
							/>
							<div>
								<p className="fifth-foot-desc">
									Более компаний обратились к нам
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="sixth-part">
					<h3 className="generalTitle sixth-title">
						Наши названия уже зарекомендовали себя и активно функционируют в
						бизнесе
					</h3>

					<div className="sixthBody">
						<div className="sixthBodyItem">
							<div className="whiteBack"></div>
							<h3 className="sixthBodyTitle">Пропорция</h3>
							<p className="sixthBodyDesc">Салон красоты</p>
							<button className="sixthBtn">Сайт</button>
						</div>
						<div className="sixthBodyItem">
							<div className="whiteBack"></div>
							<h3 className="sixthBodyTitle">Пропорция</h3>
							<p className="sixthBodyDesc">Салон красоты</p>
							<button className="sixthBtn">Сайт</button>
						</div>
						<div className="sixthBodyItem">
							<div className="whiteBack"></div>
							<h3 className="sixthBodyTitle">Пропорция</h3>
							<p className="sixthBodyDesc">Салон красоты</p>
							<button className="sixthBtn">Сайт</button>
						</div>
					</div>

					<div className="sixth-part-foot">
						<h3 className="sixth-foot-title">
							Закажите разработку эффектного фирменного стиля!
						</h3>
						<div>
							<p className="sixth-foot-desc">
								Дайте вашему бренду образ, который оставит приятное впечатление
								и запомнится вашим клиентам
							</p>
						</div>
						<div className="footBtnWrap">
							<button className="sixth-foot-btn">Заполнить бриф →</button>
						</div>
					</div>
				</div>
			</div>

			<footer className="footer">
				<div className="footer-left">
					<h2 className="overallTitle footer-title">Время обсудить проект</h2>
					<div className="footerBtns">
						<button className="overallBtn footerBtn">Рекламный креатив</button>
						<button className="overallBtn footerBtn">Нейминг</button>
						<button className="overallBtn footerBtn">Дескриптор, слоган</button>
						<button className="overallBtn footerBtn">Дизайн</button>
						<button className="overallBtn footerBtn">Логотип</button>
						<button className="overallBtn footerBtn">Фирменный стиль</button>
						<button className="overallBtn footerBtn">Сайт</button>
						<button className="overallBtn footerBtn">
							Брендбук и гайдлайн
						</button>
						<button className="overallBtn footerBtn">Motio design</button>
						<button className="overallBtn footerBtn">Упаковка</button>
						<button className="overallBtn footerBtn">3D</button>
						<button className="overallBtn footerBtn">Дизайн презентаций</button>
						<button className="overallBtn footerBtn">Дизайн подписка</button>
						<button className="overallBtn footerBtn">Стратегия</button>
						<button className="overallBtn footerBtn">СМИ</button>
						<button className="overallBtn footerBtn">
							Эксперты мнения и соцсети
						</button>
						<button className="overallBtn footerBtn">Выход на рынок РФ</button>
					</div>
				</div>

				<div className="footer-right">
					<div className="inputs-wrapper">
						<input type="text" className="name-input input" placeholder="Имя" />
						<input
							type="text"
							className="phone-input input"
							placeholder="Телефон"
						/>
					</div>

					<div className="send-wrapper">
						<button className="overallBtn send-btn overallBtn">
							Отправить
						</button>
						<p className="send-desc">
							Оставьте заявку и мы свяжемся с Вами в ближайшее время
						</p>
					</div>

					<div className="foot-right-bottom">
						<ul className="bottom-ul noneAdaptive">
							<li className="bottom-list list-item head-case">Кейсы</li>
							<li className="bottom-list list-item head-service">Услуги</li>
							<li className="bottom-list list-item head-company">О компании</li>
							<li className="bottom-list list-item head-contact">Контакты</li>
						</ul>

						<div className="apps-wrapper blockAdaptive">
							<div className="app-logos">
								<div className="socials">
									<img
										src="/business-strategy-project/MainPage/realFacebook.png"
										alt=""
										className="app-logo"
									/>
									<img
										src="/business-strategy-project/MainPage/realInstagram.png"
										alt=""
										className="app-logo"
									/>
									<img
										src="/business-strategy-project/MainPage/realYouTube.png"
										alt=""
										className="app-logo"
									/>
								</div>
								<img
									src="/business-strategy-project/MainPage/arrow-top.png"
									alt=""
									className="arrow-top noneAdaptive"
								/>
							</div>

							<p className="location">
								<p className="bolder">©️ 2024, time to agency</p>
								<p className="address">
									Санкт-Петербург, м. Адмиралтейская, ул. Большая Морская, д.
									46, оф. 777
								</p>
							</p>
						</div>

						<div className="apps-wrapper noneAdaptive">
							<div className="app-logos">
								<div className="socials">
									<img
										src="/business-strategy-project/MainPage/realFacebook.png"
										alt=""
										className="app-logo"
									/>
									<img
										src="/business-strategy-project/MainPage/realInstagram.png"
										alt=""
										className="app-logo"
									/>
									<img
										src="/business-strategy-project/MainPage/realYouTube.png"
										alt=""
										className="app-logo"
									/>
								</div>
								<img
									src="/business-strategy-project/MainPage/arrow-top.png"
									alt=""
									className="arrow-top"
								/>
							</div>

							<p className="location">
								<p className="bolder">©️ 2024, time to agency</p>
								<p className="address">
									Санкт-Петербург, м. Адмиралтейская, ул. Большая Морская, д.
									46, оф. 777
								</p>
							</p>
						</div>

						<ul className="bottom-ul blockAdaptive">
							<li className="bottom-list list-item head-case">Кейсы</li>
							<li className="bottom-list list-item head-service">Услуги</li>
							<li className="bottom-list list-item head-company">О компании</li>
							<li className="bottom-list list-item head-contact">Контакты</li>
						</ul>
					</div>
				</div>
				<img
					src="/business-strategy-project/MainPage/arrow-top.png"
					alt=""
					className="arrow-top blockAdaptive"
				/>
			</footer>
		</>
	);
};

export default Corporate;

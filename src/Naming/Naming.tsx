import "./Naming.css";
import "./NamingResponsive.css";

const Naming = () => {
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

			<div className="naming-wrapper">
				<div>
					<h2 className="main-title">
						<span className="yellowFont">Названия,</span> которые покорят  мир:
					</h2>
					<h2 className="main-title">
						Ваш путь к бренду, о котором будут говорить!
					</h2>
					<p className="title-desc">
						Создание оригинального названия для вашего продукта или услуги в
						течение
					</p>
				</div>

				<div className="first-part">
					<h3 className="generalTitle first-title">Что такое нейминг?</h3>
					<p className="firstSectionDesc">
						Нейминг - создание уникального названия для бренда — это процесс,
						который требует внимательного подхода и творческого мышления. Хотя с
						виду может показаться, что нейминг не представляет особой сложности,
						на практике это искусство требует глубокого понимания деятельности
						компании, умения создать запоминающееся и гармоничное название, а
						также учета юридических аспектов.
					</p>

					<div className="firstImgWrap">
						<img
							src="/business-strategy-project/MainPage/first-section-img.png"
							alt=""
							className="firstSectionImg"
						/>
					</div>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">Нейминг нужен, если</h3>
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
									Ваше текущее название не передает сущность и особенности
									вашего бренда.
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
									Ваша компания выходит на новые рынки и требуется
									привлекательное имя, которое привлечет внимание вашей целевой
									аудитории.
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
									Ваш продукт конкурирует с многочисленными сильными брендами, и
									вы хотите выделиться среди них.
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
									Вы запускаете новый проект и хотите, чтобы его название
									привлекало внимание и запоминалось.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="third-part">
					<h3 className="generalTitle thirdTitle">О нас</h3>
					<p className="thirdDesc">
						Наша компания является экспертом в области нейминга для бизнеса и
						медиа. Мы понимаем, что правильно подобранное название имеет
						огромное значение для успеха бренда. Часто недооценивается,
						насколько ключевым этапом является выбор названия для компании,
						продукта или услуги.
					</p>
					<p className="thirdDesc">
						Частая проблема, с которой сталкиваются многие бизнесы и
						медиапроекты, заключается в том, что неэффективные или неинтересные
						названия не только могут ухудшить узнаваемость и привлекательность
						бренда, но и создать препятствия для его успешного продвижения.
					</p>
					<p className="thirdDesc">
						Мы решаем эту проблему, предлагая инновационные и креативные подходы
						к созданию названий, которые не только точно отражают суть бренда,
						но и запоминаются своей оригинальностью и привлекательностью. Мы
						гарантируем, что с нашими услугами ваш бренд будет выделяться на
						рынке и привлекать внимание потребителей.
					</p>

					<div className="third-body">
						<img
							src="/business-strategy-project/MainPage/thirdFirst.png"
							alt=""
							className="thirdBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/thirdSecond.png"
							alt=""
							className="thirdBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/thirdThird.png"
							alt=""
							className="thirdBodyImg"
						/>
					</div>
				</div>

				<div className="fourth-part">
					<h3 className="generalTitle">
						Шаги на пути к названию, о котором будут говорить/которое будет
						звучать
					</h3>

					<div className="fourthSectionBody">
						<div className="fourthBodyItem">
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Определяем цели</h4>
								<p className="fourthInnerDesc">
									В ходе беседы мы берем на себя задачу понять ваши точные цели
									и ожидания от проекта, чтобы обеспечить наилучший результат
								</p>
							</div>
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Изучаем рынок</h4>
								<p className="fourthInnerDesc">
									Мы проводим анализ рынка и выявляем тематические направления и
									семантические поля, чтобы название соответствовало требованиям
									вашей индустрии.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem ">
							<div className="fourthInnerItem TwoInOne">
								<h4 className="fourthInnerTitle">Обсуждаем результаты</h4>
								<p className="fourthInnerDesc">
									Мы представляем вам готовые варианты названия и подробно
									обсуждаем их потенциал и соответствие вашим целям и ожиданиям.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">
									Запускаем творческий процесс
								</h4>
								<p className="fourthInnerDesc">
									На основе полученной информации мы приступаем к созданию
									уникального и привлекательного названия, учитывая все наши
									выводы и аналитику.
								</p>
							</div>
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Проверяем уникальность</h4>
								<p className="fourthInnerDesc">
									Мы тщательно проверяем выбранные названия на уникальность и
									возможность регистрации в соответствии с МКТУ.
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
							Закажите разработку эффектного названия!
						</h3>
						<div>
							<p className="sixth-foot-desc">
								Дайте вашему бренду имя, которое запомнят Если у Вас остались
								вопросы, оставьте заявку, и мы свяжемся с Вами в ближайшее время
							</p>
						</div>
						<div className="footBtnWrap">
							<button className="sixth-foot-btn">
								Хочу оригинальный нейминг →
							</button>
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

export default Naming;

import "./Presentation.css";
import "./PresentResponsive.css";

const Presentation = () => {
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

			<div className="souvenir-wrapper">
				<div className="innerHead">
					<h2 className="main-title">
						Дизайн
						<span className="yellowFont"> Презентаций</span>
					</h2>
					<p className="title-desc">
						Добро пожаловать в <span className="yellowFont">Time to</span>,
						вашего надежного партнера в мире мерчандайзинга и сувенирной
						продукции.
					</p>
				</div>

				<div className="first-part">
					<h3 className="generalTitle first-title">Что такое презентация?</h3>
					<p className="firstSectionDesc">
						В мире бизнеса существует множество важных аспектов, но одним из
						ключевых является эффективная коммуникация с клиентами и партнерами.
						И нет лучшего способа привлечь их внимание, чем качественная
						презентация. Цель каждой презентации – заинтересовать аудиторию и
						передать информацию с максимальной эффективностью. Дизайн
						презентаций — это неотъемлемая часть успешной коммуникации в
						различных сферах бизнеса. Готовы заявить миру о вашем бизнесе с
						помощью уникальной презентации? Тогда позвольте нам помочь!
					</p>

					<div className="firstImgWrap">
						<img
							src="/business-strategy-project/MainPage/presentationMainImg.png"
							alt=""
							className="firstSectionImg"
						/>
					</div>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">Наши преимущества</h3>
					<div className="second-body">
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Индивидуальный подход</h4>
								<p className="flashDesc">
									Мы понимаем, что каждый бизнес уникален, поэтому мы подходим к
									каждому проекту индивидуально. Наша команда работает тесно с
									клиентами, чтобы понять их потребности, цели и особенности
									бренда, что позволяет нам создавать презентации, полностью
									соответствующие их ожиданиям.
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
								<h4 className="flashTitle">Профессионализм</h4>
								<p className="flashDesc">
									Наши дизайнеры обладают богатым опытом в создании презентаций
									для различных отраслей бизнеса. Мы постоянно отслеживаем
									последние тенденции в дизайне и визуализации данных, чтобы
									гарантировать, что наши клиенты получают качественные и
									современные презентации.
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
								<h4 className="flashTitle">Полный цикл услуг</h4>
								<p className="flashDesc">
									Мы предоставляем полный цикл услуг, начиная с разработки
									концепции и заканчивая подготовкой презентаций в нужном
									формате. Наша команда экспертов поддерживает клиентов на всех
									этапах работы, гарантируя качественный результат и
									удовлетворение всех потребностей.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="third-part">
					<h3 className="generalTitle third-title">Процесс работы</h3>
					<div className="thirdBody">
						<div className="thirdBodyItem">
							<h4 className="thirdBodyTitle">Консультация</h4>
							<p className="thirdBodyDesc">
								 Мы начинаем с глубокого понимания потребностей и целей клиента.
								В ходе консультации мы обсуждаем детали проекта, выявляем
								основные сообщения, целевую аудиторию и планируем стратегию
								презентации.
							</p>
						</div>
						<div className="thirdBodyItem">
							<h4 className="thirdBodyTitle">Разработка концепции</h4>
							<p className="thirdBodyDesc">
								Наши дизайнеры создают уникальную концепцию презентации,
								учитывая структуру, дизайн и основные сообщения. Мы предлагаем
								клиентам различные варианты концепций и рекомендации для
								достижения оптимального результата.
							</p>
						</div>
						<div className="thirdBodyItem">
							<h4 className="thirdBodyTitle">Доработка и утверждение</h4>
							<p className="thirdBodyDesc">
								 Мы предоставляем клиентам возможность для комментариев и
								корректировок. Мы внимательно слушаем обратную связь и вносим
								необходимые изменения, чтобы презентация соответствовала
								ожиданиям клиента.
							</p>
						</div>
						<div className="thirdBodyItem">
							<h4 className="thirdBodyTitle">Итоговая подготовка</h4>
							<p className="thirdBodyDesc">
								После утверждения концепции мы окончательно оформляем
								презентацию и готовим ее к передаче в нужном формате. Мы
								гарантируем, что презентация будет готова к использованию на
								конференциях, встречах или в онлайн-формате.
							</p>
						</div>
					</div>
				</div>

				<div className="fourth-part">
					<h3 className="generalTitle fourth-title">Нам доверяют</h3>
					<img
						src="/business-strategy-project/MainPage/fifth-image.png"
						alt=""
						className="fourthMainImg"
					/>
					<div className="fourth-foot">
						<div className="fourth-foot-item">
							<img
								src="/business-strategy-project/MainPage/fifth-first.png"
								alt=""
								className="fourth-foot-img"
							/>
							<div>
								<p className="fourth-foot-desc">
									Работаем в индустрии брендинга с года
								</p>
							</div>
						</div>
						<div className="fourth-foot-item">
							<img
								src="/business-strategy-project/MainPage/fifth-second.png"
								alt=""
								className="fourth-foot-img"
							/>
							<div>
								<p className="fourth-foot-desc">Реализовано более проектов</p>
							</div>
						</div>
						<div className="fourth-foot-item">
							<img
								src="/business-strategy-project/MainPage/fifth-third.png"
								alt=""
								className="fourth-foot-img"
							/>
							<div>
								<p className="fourth-foot-desc">
									Более компаний обратились к нам
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="fifth-part">
					<h3 className="generalTitle fifth-title">Портфолио</h3>

					<div className="fifthBody">
						<div className="fifthBodyItem">
							<div className="whiteBack"></div>
							<h3 className="fifthBodyTitle">Пропорция</h3>
							<p className="fifthBodyDesc">Салон красоты</p>
							<button className="fifthBtn">Сайт</button>
						</div>
						<div className="fifthBodyItem">
							<div className="whiteBack"></div>
							<h3 className="fifthBodyTitle">Пропорция</h3>
							<p className="fifthBodyDesc">Салон красоты</p>
							<button className="fifthBtn">Сайт</button>
						</div>
						<div className="fifthBodyItem">
							<div className="whiteBack"></div>
							<h3 className="fifthBodyTitle">Пропорция</h3>
							<p className="fifthBodyDesc">Салон красоты</p>
							<button className="fifthBtn">Сайт</button>
						</div>
					</div>

					<div className="fifth-part-foot">
						<h3 className="fifth-foot-title">Не откладывайте успех на потом</h3>
						<div className="getsFlex">
							<p className="fifth-foot-desc">
								Свяжитесь с нами прямо сейчас и начнем работу!
							</p>

							<button className="fifth-foot-btn">Заполнить бриф →</button>
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

export default Presentation;

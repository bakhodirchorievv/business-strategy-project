import "./Site.css";
import "./SiteResponsive.css";

const Site = () => {
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

			<div className="site-wrapper">
				<div className="innerHead">
					<h2 className="main-title">Сайт</h2>
					<p className="main-desc">
						Добро пожаловать в <span className="yellowDesc">Time to</span> -
						вашего надежного партнера в мире веб-разработки! Мы являемся
						ведущими экспертами в создании высококачественных и инновационных
						веб-сайтов, специализируясь на индивидуальном подходе к каждому
						проекту. Наша цель - не просто создать сайт, а предложить вам
						уникальный цифровой инструмент, который будет служить мощным
						инструментом для достижения ваших бизнес-целей.
					</p>
					<p className="main-desc">
						Мы понимаем, что ваш сайт - это лицо вашего бренда в онлайн-мире,
						поэтому мы стремимся создать нечто большее, чем просто
						интернет-страницу. Мы создаем цифровые пространства, которые
						воплощают вашу уникальную идентичность, эффективно коммуницируют с
						вашей аудиторией и способствуют росту вашего бизнеса. В [название
						компании] мы гордимся тем, что обеспечиваем клиентов не только
						высококлассными технологическими решениями, но и внимательным
						отношением к их потребностям и целям.
					</p>
					<p className="main-desc">
						Готовы воплотить вашу идею для сайта в реальность? Давайте начнем
						работу прямо сейчас!
					</p>
					<p className="main-desc">
						В современном цифровом мире конкуренция на рынке веб-пространства
						становится все более острой. Потребители сталкиваются с проблемой
						выбора среди множества сайтов, которые предлагают сходные услуги или
						товары. Они испытывают затруднения в поиске надежного и
						функционального веб-ресурса, который точно соответствует их
						потребностям и ожиданиям. Без качественного сайта компания может
						потерять потенциальных клиентов, а также упустить возможность
						привлечения новых. В <span className="yellowDesc">Time to</span> мы
						понимаем эти вызовы, и поэтому предлагаем инновационные решения,
						чтобы помочь потребителям решить свои проблемы и достичь своих
						целей:
					</p>
				</div>

				<div className="first-part">
					<div className="first-body">
						<div className="first-body-item">
							<h4 className="firstInnerTitle">Индивидуальный подход</h4>
							<p className="firstInnerDesc">
								После обработки заказа и обсуждения бриф-концепции, наш процесс
								работы начинается с тщательного исследования Вашего бренда. Мы
								изучаем конкуренцию в нише, анализируем тренды и выявляем
								ключевые моменты, которые необходимо учесть при создании слогана
								и дескриптора.
							</p>
						</div>
						<div className="first-body-item  sYellow">
							<h4 className="firstInnerTitle yellowContent">
								Продуманный дизайн и удобство использования
							</h4>
							<p className="firstInnerDesc yellowContent">
								Затем наша команда генерирует идеи и проводит тестирование,
								чтобы убедиться, что предложенные варианты соответствуют Вашим
								целям и эффективно передают Ваше послание /сообщение/message.
							</p>
						</div>
						<div className="first-body-item">
							<h4 className="firstInnerTitle">Инновационные технологии</h4>
							<p className="firstInnerDesc">
								В итоге Вы получаете несколько уникальных и эффектных слоганов,
								которые идеально впишутся в образ Вашего бизнеса. 
							</p>
						</div>
					</div>

					<div className="first-body">
						<img
							src="/business-strategy-project/MainPage/siteFirst.png"
							alt=""
							className="firstBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/siteSecond.png"
							alt=""
							className="firstBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/siteThird.png"
							alt=""
							className="firstBodyImg"
						/>
					</div>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">Наши услуги</h3>

					<div className="secondSectionBody">
						<div className="secondBodyItem">
							<div className="secondInnerItem">
								<h4 className="secondInnerTitle">Анализ рынка</h4>
								<p className="secondInnerDesc">
									Мы проводим глубокий анализ рынка, изучая тенденции,
									конкурентов и потребности вашей целевой аудитории. Наши
									специалисты предоставляют Вам полную картину рыночной
									ситуации, чтобы помочь с принятием информированных решений о
									вашем веб-проекте.
								</p>
							</div>
							<div className="secondInnerItem">
								<h4 className="secondInnerTitle">Дизайн сайта / UX / UI</h4>
								<p className="secondInnerDesc">
									Наша команда дизайнеров и разработчиков создает уникальные и
									креативные дизайны сайтов, учитывая принципы пользовательского
									опыта (UX) и интерфейса (UI). Мы стремимся к тому, чтобы Ваш
									сайт был не только красивым, но и функциональным
								</p>
							</div>
						</div>
						<div className="secondBodyItem ">
							<div className="secondInnerItem TwoInOne">
								<h4 className="secondInnerTitle">Интернет магазин / каталог</h4>
								<p className="secondInnerDesc">
									Мы создаем эффективные интернет-магазины и каталоги, которые
									помогут Вам увеличить продажи и привлечь новых клиентов. Мы
									обеспечиваем Вас всем необходимым функционалом для управления
									продуктами, заказами и платежами, чтобы вы могли эффективно
									вести Ваш бизнес в онлайн-пространстве.
								</p>
							</div>
						</div>
						<div className="secondBodyItem ">
							<div className="secondInnerItem simpleBack">
								<h4 className="secondInnerTitle">Корпоративный</h4>
								<p className="secondInnerDesc">
									Мы разрабатываем профессиональные корпоративные сайты, которые
									отражают вашу уникальную брендовую идентичность и обеспечивают
									Вас всем необходимым функционалом для успешного
									онлайн-присутствия.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="third-part">
					<h3 className="generalTitle third-title">Этапы работы</h3>
					<div className="third-body">
						<div className="thirdBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">Сбор информации</h3>
								<p className="flashDesc">
									На этом этапе мы тщательно изучаем ваши потребности, цели и
									пожелания относительно будущего веб-проекта
								</p>
							</div>
						</div>
						<div className="thirdBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">Планирование</h3>
								<p className="flashDesc">
									Мы разрабатываем детальный план создания вашего веб-сайта,
									определяя структуру, функционал и дизайн.
								</p>
							</div>
						</div>
						<div className="thirdBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">Дизайн и разработка</h3>
								<p className="flashDesc">
									На этом этапе мы создаем дизайн вашего сайта, а затем
									приступаем к его разработке с использованием передовых
									технологий и инструментов.
								</p>
							</div>
						</div>
						<div className="thirdBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">Тестирование и оптимизация</h3>
								<p className="flashDesc">
									Мы тщательно тестируем ваш веб-сайт на различных устройствах и
									браузерах, чтобы убедиться в его корректной работе.
								</p>
							</div>
						</div>
						<div className="thirdBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">Запуск и поддержка</h3>
								<p className="flashDesc">
									После успешного завершения всех этапов мы запускаем ваш
									веб-сайт и предоставляем вам полную поддержку и обслуживание,
									чтобы вы могли быть уверены в его надежности и безопасности.
								</p>
							</div>
						</div>
					</div>

					<p className="thirdPartLastDesc">
						Готовы преобразить свой онлайн имидж и выделиться из толпы
						конкурентов? Не упустите возможность создать уникальный и
						запоминающийся веб-сайт, который станет ключом к привлечению новых
						клиентов и укреплению вашего бренда!
					</p>
				</div>

				<div className="fourth-part">
					<h3 className="generalTitle fourth-title">
						Наши названия уже зарекомендовали себя и активно функционируют в
						бизнесе
					</h3>

					<div className="fourthBody">
						<div className="fourthBodyItem">
							<div className="whiteBack"></div>
							<h3 className="fourthBodyTitle">Пропорция</h3>
							<p className="fourthBodyDesc">Салон красоты</p>
							<button className="fourthBtn">Сайт</button>
						</div>
						<div className="fourthBodyItem">
							<div className="whiteBack"></div>
							<h3 className="fourthBodyTitle">Пропорция</h3>
							<p className="fourthBodyDesc">Салон красоты</p>
							<button className="fourthBtn">Сайт</button>
						</div>
						<div className="fourthBodyItem">
							<div className="whiteBack"></div>
							<h3 className="fourthBodyTitle">Пропорция</h3>
							<p className="fourthBodyDesc">Салон красоты</p>
							<button className="fourthBtn">Сайт</button>
						</div>
					</div>

					<div className="fourth-part-foot">
						<h3 className="fourth-foot-title">
							Закажите разработку брендбука или гайдлайна!
						</h3>
						<div>
							<p className="fourth-foot-desc">
								Если у Вас остались вопросы, оставьте заявку, и мы свяжемся с
								Вами в ближайшее время
							</p>
						</div>
						<div className="footBtnWrap">
							<button className="fourth-foot-btn">Заполнить бриф →</button>
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

export default Site;

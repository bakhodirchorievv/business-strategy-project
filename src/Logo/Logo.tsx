import "./Logo.css";
import "./LogoResponsive.css";

const Logo = () => {
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

			<div className="logo-wrapper">
				<div className="innerHead">
					<h2 className="main-title">Логотип</h2>
					<p className="main-desc">
						Добро пожаловать в Time to – Вашего надежного партнера в мире
						маркетинговых решений. 
					</p>
					<p className="main-desc">
						Логотип — это не просто изображение, а ключевой элемент брендинга,
						который отражает Вашу уникальность, ценности и стиль. Мы посвятили
						себя тому, чтобы помочь Вашему бренду выделиться среди остальных,
						создавая уникальные атрибуты, которые будут запоминающимися и
						узнаваемыми.
					</p>
					<p className="main-desc">
						Наши логотипы — это не просто картинки. Они являются результатом
						внимательного анализа Вашего бренда, аудитории и индустрии.{" "}
						<p>
							Мы стремимся создать зеркало Вашего бренда, которое будет точно
							передавать его уникальность.
						</p>
					</p>

					<div className="innerHeadFoot">
						<div className="innerHeadCard yellow">
							<h3 className="innerCardTitle">Проблема потребителя</h3>
							<p className="innerCardDesc">
								Логотип не только представляет Ваш бренд, но и является ключевым
								элементом в формировании первого впечатления о компании. Он
								должен быть не только эстетически привлекательным, но и
								передавать уникальность, ценности и миссию.
							</p>
						</div>
						<div className="innerHeadCard">
							<p className="innerCardDesc ">
								В мире, где мы каждый день сталкиваемся с огромным количеством
								информации и контента, выделение своего бренда становится
								сложной задачей. Логотип становится первым, что замечает Ваша
								аудитория. Он должен быть не только привлекательным визуально,
								но и содержательно мощным инструментом, который точно отражает
								сущность и идею Вашего бренда.
							</p>
						</div>
					</div>
				</div>

				<div className="first-part">
					<h3 className="generalTitle first-title">
						Как мы решаем эту проблему?
					</h3>
					<p className="first-desc">
						Мы, понимаем важность правильного логотипа и его воздействия на
						публику. Это ключевой элемент брендинга компании, который должен
						быть уникальным и запоминающимся. Наша команда дизайнеров и
						маркетологов учитывает особенности Вашего бренда и целевой
						аудитории, чтобы создать логотип, который привлечет внимание и
						оставит незабываемое впечатление.
					</p>

					<div className="first-body">
						<img
							src="/business-strategy-project/MainPage/logo-first.png"
							alt=""
							className="first-body-img"
						/>
						<img
							src="/business-strategy-project/MainPage/logo-second.png"
							alt=""
							className="first-body-img"
						/>
						<img
							src="/business-strategy-project/MainPage/logo-third.png"
							alt=""
							className="first-body-img"
						/>
					</div>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">
						Преимущества нашей компании
					</h3>

					<div className="second-body">
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h3 className="flashTitle">Индивидуальный подход</h3>
								<p className="flashDesc">
									Наша команда тщательно анализирует Ваш бренд, ценности, а
									также предпочтения целевой аудитории, чтобы создать логотип
									выделяется
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
								<h3 className="flashTitle">Опыт и профессионализм</h3>
								<p className="flashDesc">
									Мы гордимся нашими дизайнерами, которые владеют не только
									высоким профессионализмом и многолетним опытом, но и обладают
									уникальным творческим подходом к созданию логотипов.
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
								<h3 className="flashTitle">Результативность</h3>
								<p className="flashDesc">
									Наша цель - не только создать логотип, но и превзойти ожидания
									клиентов. Мы предлагаем персонализированный подход и открытую
									коммуникацию
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="third-part">
					<h3 className="generalTitle third-title">Процесс работы</h3>
					<div className="third-body">
						<div className="third-body-item">
							<h4 className="thirdInnerTitle">
								Исследование и концептуализация
							</h4>
							<p className="thirdInnerDesc">
								После обработки заказа и обсуждения бриф-дизайна, наш процесс
								начинается с глубокого исследования Вашего бренда, индустрии и
								целевой аудитории. Мы анализируем цели бренда, ценности и
								уникальные особенности, чтобы создать логотип, который отражает
								их в наилучшем виде. После этого мы приступаем к разработке
								концепции, которая будет визуализировать бренд и выделять его
								среди конкурентов
							</p>
						</div>
						<div className="third-body-item  sYellow">
							<h4 className="thirdInnerTitle yellowContent">
								Творческий процесс
							</h4>
							<p className="thirdInnerDesc yellowContent">
								Далее наши талантливые дизайнеры воплощают концепции в жизнь,
								используя передовые инструменты и свои креативные способности.
								Мы стремимся к оригинальным и запоминающимся решениям, которые
								будут точно передавать Вашу уникальность и стиль.
							</p>
						</div>
						<div className="third-body-item">
							<h4 className="thirdInnerTitle">Итерации и утверждение</h4>
							<p className="thirdInnerDesc">
								Мы предоставляем Вам возможность просматривать и оценивать
								предложенные варианты логотипа. Мы готовы вносить изменения и
								уточнения, чтобы гарантировать идеальный результат.
							</p>
						</div>
					</div>
				</div>

				<div className="fourth-part">
					<h3 className="generalTitle fourth-title">Портфолио и отзывы</h3>
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
				</div>

				<div className="fifth-part">
					<h3 className="generalTitle fifth-title">Вместе мы можем</h3>
					<div className="fifth-body">
						<div className="fifthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">
									Создать логотип, который будет отражать дух Вашего бренда и
									привлекать внимание целевой аудитории
								</p>
							</div>
						</div>
						<div className="fifthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">
									Разработать дизайн, который точно передаст ключевые
									особенности и преимущества Вашего бизнеса
								</p>
							</div>
						</div>
						<div className="fifthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">
									Привлечь новых клиентов и укрепить связь с текущими, используя
									мощные и запоминающиеся образы
								</p>
							</div>
						</div>
						<div className="fifthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">
									Сделать Ваш бренд уникальным и запоминающимся на рынке
								</p>
							</div>
						</div>
					</div>

					<div className="fifth-part-foot">
						<h3 className="fifth-foot-title">
							Готовы увидеть свой бренд в новом свете?
						</h3>
						<div className="getsFlex">
							<p className="fifth-foot-desc">
								Свяжитесь с нами сегодня, чтобы начать процесс создания Вашего
								уникального логотипа.
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

export default Logo;

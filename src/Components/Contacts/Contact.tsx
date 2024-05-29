import "./Contact.css";
import "./ContactResponsive.css";

const Contact = () => {
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

			<div className="contact-wrapper">
				<h2 className="contact-title">Наши контактные данные</h2>

				<div className="contact-body">
					<div className="contactBodyItem">
						<h4 className="contactItemTitle">Телефон</h4>
						<p className="contactItemDesc">+7 999 710-39-95</p>
					</div>
					<div className="contactBodyItem">
						<h4 className="contactItemTitle">Адрес</h4>
						<p className="contactItemDesc">Санкт-Петербург</p>
					</div>
					<div className="contactBodyItem">
						<h4 className="contactItemTitle">Социальные-сети</h4>
						<p className="contactItemDesc">WhatsApp</p>
						<p className="contactItemDesc">Telegramm</p>
						<p className="contactItemDesc">VK</p>
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

export default Contact;

import { Link } from "react-router-dom";
import "./Footer.css";
import "./FooterResponsive.css";

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<>
			<footer className="footer">
				<div className="footer-left">
					<h2 className="overallTitle footer-title">Время обсудить проект</h2>
					<div className="footerBtns">
						<Link to={"Native"}>
							<button className="overallBtn hasHover footerBtn">
								Рекламный креатив
							</button>
						</Link>
						<Link to={"Naming"}>
							<button className="overallBtn hasHover footerBtn">Нейминг</button>
						</Link>
						<Link to={"Descriptor"}>
							<button className="overallBtn hasHover footerBtn">
								Дескриптор, слоган
							</button>
						</Link>
						<Link to={"Presentation"}>
							<button className="overallBtn hasHover footerBtn">Дизайн</button>
						</Link>
						<Link to={"Logo"}>
							<button className="overallBtn hasHover footerBtn">Логотип</button>
						</Link>
						<Link to={"Corporate"}>
							<button className="overallBtn hasHover footerBtn">
								Фирменный стиль
							</button>
						</Link>
						<Link to={"Site"}>
							<button className="overallBtn hasHover footerBtn">Сайт</button>
						</Link>
						<Link to={"Guideline"}>
							<button className="overallBtn hasHover footerBtn">
								Брендбук и гайдлайн
							</button>
						</Link>
						<Link to={"MDesign"}>
							<button className="overallBtn hasHover footerBtn">
								Motio design
							</button>
						</Link>
						<Link to={"Packing"}>
							<button className="overallBtn hasHover footerBtn">
								Упаковка
							</button>
						</Link>

						<button className="overallBtn hasHover footerBtn">3D</button>

						<Link to={"Presentation"}>
							<button className="overallBtn hasHover footerBtn">
								Дизайн презентаций
							</button>
						</Link>

						<button className="overallBtn hasHover footerBtn">
							Дизайн подписка
						</button>

						<Link to={"BrandStrategy"}>
							<button className="overallBtn hasHover footerBtn">
								Стратегия
							</button>
						</Link>

						<button className="overallBtn hasHover footerBtn">СМИ</button>

						<Link to={"Expert"}>
							<button className="overallBtn hasHover footerBtn">
								Эксперты мнения и соцсети
							</button>
						</Link>

						<button className="overallBtn hasHover footerBtn">
							Выход на рынок РФ
						</button>
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
							<Link to={"Cases"}>
								<li className="bottom-list list-item head-case">Кейсы</li>
							</Link>
							<li className="bottom-list list-item head-service">Услуги</li>
							<li className="bottom-list list-item head-company">О компании</li>
							<Link to={"Contact"}>
								<li className="bottom-list list-item head-contact">Контакты</li>
							</Link>
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
									onClick={scrollToTop}
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
									onClick={scrollToTop}
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
					onClick={scrollToTop}
					src="/business-strategy-project/MainPage/arrow-top.png"
					alt=""
					className="arrow-top blockAdaptive"
				/>
			</footer>
		</>
	);
};

export default Footer;

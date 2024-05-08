import "./BrandPage.css";
import Logics from "./BrandPageLogics";

const Brand = () => {
	return (
		<>
			<header className="header">
				<img className="head-img" src="/MainPage/Vector (4).png" alt="" />
				<ul className="ul-wrapper">
					<li className="list-item head-case">Кейсы</li>
					<li className="list-item head-service">Услуги</li>
					<li className="list-item head-company">О компании</li>
					<li className="list-item head-contact">Контакты</li>
				</ul>
				<button className="header-btn">время написать</button>
			</header>

			<div className="main-img-wrapper">
				<img src="/MainPage/brand-main-img.png" alt="" className="main-img" />
			</div>

			<div className="strategy-wrapper">
				<div className="strategy-left">
					<img
						src="/MainPage/strategy-title.png"
						alt=""
						className="strategy-title"
					/>
					<p className="stra-desc strategy-desc1">
						Создание сильного бренда, который поведет за собой бизнес и людей 
					</p>
					<p className="stra-desc strategy-desc2">
						Бренд-стратегия — это разработка и продвижение образа бренда, его
						позиционирование, узнаваемость и визуальное отображение
					</p>

					<img
						src="/MainPage/strategy-text-img.png"
						alt=""
						className="strategy-text-img"
					/>
				</div>

				<div className="strategy-right">
					<img
						src="/MainPage/strategy-main-img.png"
						alt=""
						className="strategy-main-img"
					/>
				</div>
			</div>

			<div className="offers-wrapper">
				<img src="/MainPage/offers-title.png" alt="" className="offers-title" />

				<div className="offer-cards-wrapper">
					<img src="/MainPage/offers-card1.png" alt="" className="offer-card" />
					<img src="/MainPage/offers-card2.png" alt="" className="offer-card" />
					<img src="/MainPage/offers-card3.png" alt="" className="offer-card" />
					<img src="/MainPage/offers-card4.png" alt="" className="offer-card" />
				</div>
				<img
					src="/MainPage/offers-card5.png"
					alt=""
					className="offer-last-img"
				/>
			</div>

			<footer className="footer">
				<div className="footer-left">
					<div className="footer-title vremya">
						<img src="/MainPage/brand-foot-title.png" alt="" />
					</div>

					<div className="titlle">
						<img src="/MainPage/Titlle.png" alt="" />
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
									src="/MainPage/Vector (1).png"
									alt=""
									className="app-logo"
								/>
								<img
									src="/MainPage/Vector (2).png"
									alt=""
									className="app-logo"
								/>
								<img
									src="/MainPage/Vector (3).png"
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
						<img src="/MainPage/main-foot-title.png" alt="" />
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

				<img src="/MainPage/Rectangle 72.png" alt="" className="foot-fold" />
				<img src="/MainPage/shadow.png" alt="" className="foot-shadow" />
			</footer>

			<div className="background-effect">
				<div></div>
			</div>

			<Logics />
		</>
	);
};

export default Brand;

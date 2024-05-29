import "./Television.css";
import "./TeleResponsive.css";

const Television = () => {
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

			<div className="television-wrapper">
				<div className="innerHead">
					<h2 className="main-title">
						<span className="yellowFont">Реклама </span>
						на телевидении
					</h2>
					<p className="title-desc">
						Компания "Наша Реклама" рада представить вам новую возможность для
						эффективного продвижения вашего бренда! Теперь вы можете разместить
						свою рекламу на самых популярных телеканалах!
					</p>
				</div>

				<div className="first-part">
					<h4 className="generalTitle first-title">О нас</h4>

					<p className="firstSectionDesc">
						Телевизионная реклама используется для разнообразного воздействия на
						аудиторию. Она представляет визуальные образы в динамике, что
						привлекает внимание зрителей и оказывает комплексное воздействие.
					</p>
					<p className="firstSectionDesc">
						Целью телерекламы является не только продемонстрировать продукт или
						услугу, но и показать их применение, объяснить функциональные
						особенности и передать ощущения от использования.
					</p>

					<div className="firstImgWrap">
						<img
							src="/business-strategy-project/MainPage/televisionMainImg.png"
							alt=""
							className="firstSectionImg"
						/>
					</div>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">
						Рекламу на ТВ используют для
					</h3>
					<div className="second-body">
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">продвижения товаров и услуг</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">увеличения узнаваемости бренда</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">привлечения новых клиентов</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">стимулирования продаж</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">формирования лояльности</p>
							</div>
						</div>
					</div>

					<div className="secondPartBottom">
						<h2 className="generalTitle">Что мы предлагаем?</h2>
						<div className="bottomBody">
							<div className="bottomItem">
								<h4 className="bottomItemTitle">Широкий охват</h4>
								<p className="bottomItemDesc">
									Мы сотрудничаем с разнообразными каналами и выбираем
									оптимальные временные слоты, чтобы ваша реклама была замечена
									максимальным числом зрителей.
								</p>
							</div>
							<div className="bottomItem">
								<h4 className="bottomItemTitle">Индивидуальный подход</h4>
								<p className="bottomItemDesc">
									Наш коллектив экспертов готов помочь вам создать рекламную
									стратегию, идеально отвечающую вашим требованиям и финансовым
									возможностям.
								</p>
							</div>
						</div>
						<div className="bottomFoot">
							<h4 className="bottomItemTitle bottomFootTitle">
								Результативность
							</h4>
							<p className="bottomFootDesc">
								Наша цель - не просто разместить вашу рекламу на ТВ, но и
								обеспечить ее успешное исполнение. Мы стремимся к тому, чтобы
								каждая секунда вашей рекламы была использована наиболее
								эффективно, чтобы привлечь внимание, увеличить узнаваемость
								вашего бренда и поднять продажи или конверсию.
							</p>
						</div>
					</div>
				</div>

				<div className="third-part">
					<h3 className="generalTitle third-title">
						Какие инструменты для разработки телевизионной рекламы мы
						используем?
					</h3>

					{/*repetition*/}
					<div className="second-body">
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Видеоматериалы</h4>
								<p className="flashDesc">
									Работаем до согласования каждого этапа. Кайфуем от процесса
									работы и результата, который выдаем.
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
								<h4 className="flashTitle">Звуковое оформление</h4>
								<p className="flashDesc">
									Быстро включаемся и работаем по целям и задачам клиента.
									Знаем, что и как делать для получения результата.
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
								<h4 className="flashTitle">Изображения</h4>
								<p className="flashDesc">
									Дружелюбный сервис. Всегда выслушиваем все ваши пожелания и
									искренне хотим осуществить вам
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
								<h4 className="flashTitle">Текст</h4>
								<p className="flashDesc">
									Работа с нуля. У нас целая команда специалистов – дизайнеров,
									копирайтеров и аналитиков, которая способна создать уникальную
									презентацию конкретно для вас
								</p>
							</div>
						</div>
					</div>
					{/*repetition*/}
					<div className="third-part-foot">
						<h3 className="third-foot-title">
							Оставьте заявку, и мы обязательно свяжемся с вами!
						</h3>
						<div className="getsFlex">
							<p className="third-foot-desc">
								Наша команда готова превратить ваши идеи в яркую и
								запоминающуюся телевизионную рекламу, которая подчеркнет
								уникальность вашего бренда.
							</p>

							<button className="third-foot-btn">Заполнить бриф →</button>
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

export default Television;

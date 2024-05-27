import "./Expert.css";
import "./ExpertResponsive.css";

const Expert = () => {
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

			<div className="expert-wrapper">
				<div className="innerHead">
					<h2 className="main-title">
						<span className="yellowFont">Эксперты </span>мнения и соцсети
					</h2>
				</div>

				<div className="first-part">
					<h3 className="generalTitle first-title">О нас</h3>
					<p className="firstSectionDesc">
						Мы- команда экспертов по продвижению твоего бизнеса в социальных
						сетях. Наша цель - помочь тебе увеличить узнаваемость бренда,
						привлечь новых клиентов и повысить продажи.
					</p>

					<div className="firstImgWrap">
						<img
							src="/business-strategy-project/MainPage/ExpertMainImg.png"
							alt=""
							className="firstSectionImg"
						/>
					</div>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">
						Что дает бизнесу продвижение и реклама в социальных сетях
					</h3>
					<div className="second-body">
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">Увеличение узнаваемости бренда;</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">
									Создание дополнительного канала продаж
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
								<p className="flashDesc">
									Возможность установить контакт с потенциальными клиентами и
									понять их потребности
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
								<p className="flashDesc">
									Привлечение дополнительного трафика на веб-сайт.
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
								<p className="flashDesc">
									Повышение лояльности клиентов и доверия к бренду
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="third-part">
					<h3 className="generalTitle third-title">
						Наши ключевые направления
					</h3>

					<div className="thirdPartBody">
						<div className="thirdPartItem">
							<h4 className="thirdBodyTitle">
								Поиск и анализ блогеров с целевой аудиторией
							</h4>
							<p className="thirdBodyDesc">
								Наш сервис проводит автоматический анализ вашей целевой
								аудитории и подбирает наиболее подходящих блогеров для
								эффективного продвижения вашего продукта.{" "}
							</p>
						</div>
						<div className="thirdPartItem">
							<h4 className="thirdBodyTitle">Закупка рекламы</h4>
							<p className="thirdBodyDesc">
								Мы предлагаем полное сопровождение и помощь в продвижении вашей
								рекламы, чтобы достичь максимального эффекта. Мы работаем с
								различными социальными сетями, включая Instagram, VK, Facebook и
								другие
							</p>
						</div>
						<div className="thirdPartItem">
							<h4 className="thirdBodyTitle">Вирусная реклама</h4>
							<p className="thirdBodyDesc">
								Наш сервис может помочь вам в создании и распространении
								вирусной рекламы через социальные сети, подбирая подходящих
								блогеров и создавая контент, который будет привлекать внимание
								пользователей.
							</p>
						</div>
						<div className="thirdPartItem">
							<h4 className="thirdBodyTitle">Дизайн</h4>
							<p className="thirdBodyDesc">
								Мы разработаем для вас качественный дизайн для социальных сетей,
								который будет соответствовать вашим потребностям и поможет
								выделиться среди конкурентов.
							</p>
						</div>
						<div className="thirdPartItem">
							<h4 className="thirdBodyTitle">Крауд маркетинг</h4>
							<p className="thirdBodyDesc">
								Мы предоставляем услуги крауд-маркетинга, способствующие
								привлечению внимания широкой аудитории к вашему бренду или
								продукту, а также формированию мощного сообщества сторонников.
							</p>
						</div>
						<div className="thirdPartItem">
							<h4 className="thirdBodyTitle">Посев</h4>
							<p className="thirdBodyDesc">
								Наша команда профессионалов разместит рекламные посты от вашего
								имени в самых актуальных группах и сообществах, чтобы увеличить
								узнаваемость и привлечь новых клиентов.
							</p>
						</div>
					</div>
				</div>

				<div className="fourth-part">
					<h3 className="generalTitle fourth-title">
						Как мы создаем стратегию, которая работает
					</h3>
					<div className="fourth-body">
						<div className="fourthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Сбор информации</h4>
								<p className="flashDesc">
									Обсуждение ключевой информации с клиентом и заполнение брифа
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Планирование</h4>
								<p className="flashDesc">
									Исследование целевой аудитории и конкурентов, разработка
									стратегии
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Создание контента</h4>
								<p className="flashDesc">
									Разработка визуального концепта и «фундамента» страницы -
									контента
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Публикация</h4>
								<p className="flashDesc">
									Управление социальными сетями, постинг и анализ
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Привлечение трафика</h4>
								<p className="flashDesc">
									Таргетированная реклама, сотрудничество с блогерами,
									проведение розыгрышей, кросс-маркетинг
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Отчетность</h4>
								<p className="flashDesc">
									Анализ и презентация результатов работы
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
						<div>
							<h3 className="fifth-foot-title">Оставьте заявку!</h3>
							<p className="fifth-foot-desc">
								 наша команда экспертов превратит ваши концепции в
								запоминающуюся и оригинальную рекламу, которая эффективно
								подчеркнет уникальность вашего бренда.
							</p>
						</div>
						<div className="footBtnWrap">
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

export default Expert;

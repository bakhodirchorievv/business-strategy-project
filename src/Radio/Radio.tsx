import "./Radio.css";
import "./RadioResponsive.css";

const Radio = () => {
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
						на радио
					</h2>
					<p className="title-desc">
						Хотите, чтобы ваш бренд зазвучал на волне успеха? Мы предлагаем
						размещение рекламы на самых популярных радиостанциях Москвы и
						Питера! Доверьте нам вашу рекламу и позвольте вашему бизнесу
						зазвучать ярко и запоминающе!
					</p>
				</div>

				<div className="first-part">
					<h3 className="generalTitle first-title">
						Для чего используют рекламу на радио?
					</h3>
					<div className="third-body">
						<div className="thirdBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Представление продукта</h4>
								<p className="flashDesc">
									демонстрирует новый товар или услугу, выделяет ключевые
									особенности и преимущества
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
								<h4 className="flashTitle">
									Информирование о специальных предложениях
								</h4>
								<p className="flashDesc notForAll">
									сообщает аудитории о доступных акциях, специальных ценах и
									подарках от компании
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
								<h4 className="flashTitle">Сезонное напоминание о продукте</h4>
								<p className="flashDesc">
									напоминает о необходимых услугах в определенное время, таких
									как замена резины, стоматологические процедуры, подача
									декларации и другие
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
								<h4 className="flashTitle">Передача ценностей компании</h4>
								<p className="flashDesc">
									раскрывает то, что важно для аудитории, выделяет основные
									преимущества и ценности бренда
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
								<h4 className="flashTitle">Анонсирование мероприятий</h4>
								<p className="flashDesc">
									информирует о предстоящих событиях, включая тему, дату, время
									и целевую аудиторию
								</p>
							</div>
						</div>
					</div>

					<img
						src="/business-strategy-project/MainPage/radioMainImg.png"
						alt=""
						className="mainImg"
					/>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">
						Почему выбирают именно нас?
					</h3>

					<div className="secondBody">
						<div className="secondBodyItem">
							<h4 className="secondBodyTitle">Профессионализм и опыт</h4>
							<p className="secondBodyDesc">
								наша компания имеет многолетний опыт работы в сфере рекламы на
								радио и предоставляет высококачественные услуги
							</p>
						</div>
						<div className="secondBodyItem">
							<h4 className="secondBodyTitle">Индивидуальный подход</h4>
							<p className="secondBodyDesc">
								мы разрабатываем уникальные медиапланы и креативные концепции,
								учитывая потребности и цели каждого клиента, что позволяет
								добиться максимальной эффективности рекламной кампании
							</p>
						</div>
						<div className="secondBodyItem">
							<h4 className="secondBodyTitle">Широкий выбор радиостанций</h4>
							<p className="secondBodyDesc">
								мы имеем хорошие партнерские отношения с различными
								радиостанциями, что позволяет нам предложить клиентам широкий
								выбор площадок для размещения рекламы
							</p>
						</div>
						<div className="secondBodyItem">
							<h4 className="secondBodyTitle">Комплексный подход</h4>
							<p className="secondBodyDesc">
								мы предоставляем полный спектр услуг по созданию и размещению
								рекламы на радио, начиная от разработки концепции и сценария до
								подготовки аудиоролика и контроля результатов
							</p>
						</div>
						<div className="secondBodyItem">
							<h4 className="secondBodyTitle">Прозрачность и отчетность</h4>
							<p className="secondBodyDesc">
								мы предоставляем клиентам прозрачные отчеты о результатах
								рекламной кампании, оперативно информируем об изменениях и
								всегда готовы ответить на любые вопросы
							</p>
						</div>
					</div>
				</div>

				<div className="third-part">
					<h3 className="generalTitle third-title">Как мы работаем?</h3>

					<div className="third-body">
						<div className="thirdBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<h4 className="flashTitle">Шаг 1</h4>
								<p className="flashDesc">
									обратитесь к нам и поделитесь своими целями для рекламной
									кампании. Мы создадим уникальный медиаплан, учитывая вашу
									информацию, определим целевую аудиторию и подберем подходящие
									радиостанции.
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
								<h4 className="flashTitle">Шаг 2</h4>
								<p className="flashDesc notForAll">
									предоставьте готовый ролик или доверьте его создание нашей
									команде профессионалов.
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
								<h4 className="flashTitle">Шаг 3</h4>
								<p className="flashDesc">
									мы разработаем сценарий ролика, подберем идеальный голос
									диктора, проведем студийную запись и согласуем все детали с
									вами. Здесь же будет произведено подписание документов и
									оплата услуг.
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
								<h4 className="flashTitle">Шаг 4</h4>
								<p className="flashDesc">
									запуск рекламной кампании с ежедневным контролем выходов. Мы
									оперативно предоставим все необходимые отчеты и закрывающие
									документы по завершении размещения
								</p>
							</div>
						</div>
					</div>

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

export default Radio;

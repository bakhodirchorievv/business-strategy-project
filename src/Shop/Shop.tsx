import "./Shop.css";
import "./ShopResponsive.css";

const Shop = () => {
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

			<div className="shop-wrapper">
				<div className="innerHead">
					<h2 className="main-title">
						<span className="yellowFont">Ваш бизнес </span>в онлайне:
						интернет-магазин от профессионалов
					</h2>
					<p className="title-desc">
						Создаем многофункциональный и привлекательный интернет-магазин под
						любые запросы
					</p>
				</div>

				<div className="first-part">
					<h3 className="generalTitle first-title">
						Что такое интернет-магазин?
					</h3>
					<p className="firstSectionDesc">
						Сегодня для успешного расширения объемов продаж необходимо
						оперировать не только розничной и оптовой торговлей, ограниченной
						географически, но и активно присутствовать в онлайн-пространстве.
						Интернет стал ключевым инструментом для привлечения новых клиентов и
						увеличения прибыли.
					</p>

					<div className="firstImgWrap">
						<img
							src="/business-strategy-project/MainPage/ShopMainImg.png"
							alt=""
							className="firstSectionImg"
						/>
					</div>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">
						Вам поможет интернет-магазин, если
					</h3>
					<div className="second-body">
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">
									Вы хотите расширить географию продаж, так как на данный момент
									она ограничена местным рынком, и привлечь клиентов из других
									регионов или стран.
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
									Вы стремитесь улучшить уровень сервиса для ваших клиентов,
									предоставив им возможность удобно выбирать и покупать товары
									онлайн.
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
									Хотите увеличить узнаваемость вашего бренда и создать
									дополнительный канал продаж.
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
									Вы хотите увеличить прибыль, сократив издержки на аренду и
									обслуживание физических магазинов.
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
									Вы хотите начать свой бизнес с минимальными затратами и
									рисками, используя интернет-магазин как первоначальную
									площадку для продаж.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="third-part">
					<h3 className="generalTitle thirdTitle">О нас</h3>
					<p className="thirdDesc">
						Проблема, которую часто испытывают бизнесы, заключается в том, что
						их текущий онлайн-магазин не отвечает современным требованиям
						пользователей. Стандартные шаблоны и неудобная навигация могут
						отпугнуть потенциальных покупателей, а устаревший дизайн не
						способствует доверию к бренду. В результате компания теряет клиентов
						и упускает возможность увеличить продажи.
					</p>
					<p className="thirdDesc">
						<span className="yellowFont">Time to</span> готова решить эту
						проблему, создавая качественные интернет-магазины с индивидуальным
						дизайном и удобной навигацией.
					</p>
					<p className="thirdDesc">
						Наша компания специализируется на создании уникальных
						интернет-магазинов, которые выделяются на фоне конкурентов. Мы
						предлагаем индивидуальный дизайн, который соответствует вашему
						бренду и привлекает внимание потенциальных клиентов. Наша команда
						разработчиков уделяет особое внимание удобной навигации и
						функциональности сайта, чтобы пользователи могли легко находить и
						заказывать товары. Кроме того, мы создаем адаптивные сайты, которые
						отлично отображаются на любых устройствах, что позволяет вашему
						бизнесу быть доступным для клиентов в любое время и из любой точки
						мира.
					</p>
					<p className="thirdDesc">
						Мы учитываем особенности бренда и потребности целевой аудитории,
						чтобы каждый сайт был эффективным инструментом продаж, улучшал
						пользовательский опыт и способствовал укреплению имиджа компании.
					</p>

					<div className="third-body">
						<img
							src="/business-strategy-project/MainPage/ShopFirst.png"
							alt=""
							className="thirdBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/ShopSecond.png"
							alt=""
							className="thirdBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/ShopThird.png"
							alt=""
							className="thirdBodyImg"
						/>
					</div>
				</div>

				<div className="fourth-part">
					<h3 className="generalTitle">Процесс работы</h3>

					<div className="fourthSectionBody">
						<div className="fourthBodyItem">
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Консультация-знакомство</h4>
								<p className="fourthInnerDesc">
									Начнем с бесплатной консультации с нашими специалистами. Мы
									выслушаем ваши идеи и цели, чтобы создать концепцию,
									соответствующую вашему бизнесу.
								</p>
							</div>
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Анализ рынка</h4>
								<p className="fourthInnerDesc">
									Наши аналитики проведут исследование вашей ниши и конкурентов,
									чтобы выделить уникальные возможности и разработать стратегию
									продвижения.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem ">
							<div className="fourthInnerItem TwoInOne">
								<h4 className="fourthInnerTitle">Поддержка и развитие</h4>
								<p className="fourthInnerDesc">
									Мы не просто создаем сайты, мы предлагаем долгосрочное
									партнерство. При вашем желании наша команда будет поддерживать
									ваш интернет-магазин, обновлять его и развивать, чтобы он
									оставался конкурентоспособным и эффективным.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Дизайн и разработка</h4>
								<p className="fourthInnerDesc">
									Наши дизайнеры и разработчики создадут уникальный дизайн
									сайта, который привлечет ваших клиентов, и разработают
									функциональные возможности, чтобы обеспечить удобство
									использования.
								</p>
							</div>
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Тестирование и запуск</h4>
								<p className="fourthInnerDesc">
									Мы проведем тщательное тестирование всех функций вашего
									интернет-магазина, чтобы убедиться в его правильной работе, и
									поможем вам запустить его на рынок.
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
						Наши интернет-магазины уже зарекомендовали себя и активно
						функционируют в бизнесе
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
							Закажите разработку функционального сайта у нас!
						</h3>
						<div className="getsFlex">
							<p className="sixth-foot-desc">
								Дайте вашему бизнесу возможность получить новый поток клиентов и
								увеличить прибыль
							</p>

							<button className="sixth-foot-btn">Заполнить бриф →</button>
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

export default Shop;

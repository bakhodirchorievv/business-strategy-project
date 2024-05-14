import "./BrandPage.css";
import Logics from "./BrandPageLogics";

const Brand = () => {
	return (
		<>
			<header className="header">
				<img
					className="head-img"
					src="/business-strategy-project/MainPage/Vector (4).png"
					alt=""
				/>
				<ul className="ul-wrapper">
					<li className="list-item head-case">Кейсы</li>
					<li className="list-item head-service">Услуги</li>
					<li className="list-item head-company">О компании</li>
					<li className="list-item head-contact">Контакты</li>
				</ul>
				<button className="header-btn">время написать</button>
			</header>

			<div className="main-img-wrapper">
				<img
					src="/business-strategy-project/MainPage/brand-main-img.png"
					alt=""
					className="main-img"
				/>
			</div>

			<div className="strategy-wrapper">
				<div className="strategy-left">
					<img
						src="/business-strategy-project/MainPage/strategy-title.png"
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
						src="/business-strategy-project/MainPage/strategy-text-img.png"
						alt=""
						className="strategy-text-img"
					/>
				</div>

				<div className="strategy-right">
					<img
						src="/business-strategy-project/MainPage/strategy-main-img.png"
						alt=""
						className="strategy-main-img"
					/>
				</div>
			</div>

			<div className="offers-wrapper">
				<img
					src="/business-strategy-project/MainPage/offers-title.png"
					alt=""
					className="offers-title"
				/>

				<div className="offer-cards-wrapper">
					<div className="offer-card">
						<h3 className="offerCardTitle">Платформа бренда</h3>
						<p className="offerCardDesc">
							Стратегия и смысловая основа для развития бренда. Включает в себя
							анализ рынка и аудитории, аудит продукта и основанное на
							исследовании позиционирование. Платформа бренда — база для
							названия, фирменного стиля и продвижения бренда в каналах
							коммуникации.
						</p>
						<img
							src="/business-strategy-project/MainPage/fliped1.png"
							alt=""
							className="flipped"
						/>
					</div>
					<div className="offer-card">
						<h3 className="offerCardTitle">Позиционирование</h3>
						<p className="offerCardDesc">
							Образ бренда, который направлен на формирование или закрепление
							конкурентной позиции бренда на рынке. Главная цель – выделиться на
							фоне конкурентов, и укрепить собственные позиции.
						</p>
						<img
							src="/business-strategy-project/MainPage/fliped2.png"
							alt=""
							className="flipped"
						/>
					</div>
					<div className="offer-card">
						<h3 className="offerCardTitle">Создание легенды бренда</h3>
						<p className="offerCardDesc">
							Это история о компании или продукте, которая помогает
							транслировать ценности, представлять бренд клиентам в выгодном
							свете для повышения продаж и узнаваемости. Легенда воплощает в
							себе концепцию бренда, наполняет его смыслом, который трудно
							передать с помощью нейминга и слогана.
						</p>
						<img
							src="/business-strategy-project/MainPage/fliped3.png"
							alt=""
							className="flipped"
						/>
					</div>
					<div className="offer-card">
						<h3 className="offerCardTitle">Разработка пирамиды бренда</h3>
						<p className="offerCardDesc">
							Пирамида ценности бренда помогает найти и разложить по полочкам
							смыслы и подобрать правильные формулировки, обрести компании свой
							голос.
						</p>
						<img
							src="/business-strategy-project/MainPage/fliped4.png"
							alt=""
							className="flipped"
						/>
					</div>
				</div>
				<div className="offers-foot">
					<h3 className="offerCardTitle offerFootTitle">
						Определение миссии, ценностей, характера, стиля, тона коммуникации
						бренда.
					</h3>
					<p className="offerFootDesc ">
						Постановка основных принципов, убеждения и идеи, на основе которых
						компания осуществляет свою деятельность. Они определяют, каких норм
						и стандартов компания придерживается в работе.
					</p>
					<img
						src="/business-strategy-project/MainPage/fliped5.png"
						alt=""
						className="flipped"
					/>
				</div>
			</div>

			<div className="pyramids-wrapper">
				<div className="pyramids-head">
					<img
						src="/business-strategy-project/MainPage/pyramids-title.png"
						alt=""
						className="pyramidsTitle"
					/>
					<p className="pyramids-desc">
						Идентичность бренда выражается через комплексную модель, которую
						можно представить в виде пирамиды
					</p>
				</div>

				<div className="pyramid-cards-wrapper">
					<div className="divForAbsolute smallest">
						<div className="pyramid-card">
							<h3 className="pyramidTitle">Сущность и задача бренда</h3>
							<ul className="pyramid-ul shortPyramidUl">
								<li className="pyramid-li">
									Каким образом бренд призван изменить жизни своих клиентов и
									влиять на мир?
								</li>
								<li className="pyramid-li">
									Как бы ваш идеальный клиент описал ваш продукт коротко и емко
									в идеальном мире? И что бы он сказал своим друзьям о вашем
									бренде, если его разбудить ночью? Убедительность этого
									описания исходит от самого бренда, а не от клиента.
								</li>
							</ul>
							<img
								src="/business-strategy-project/MainPage/fliped4.png"
								alt=""
								className="flipped"
							/>
							<img
								src="/business-strategy-project/MainPage/04-pyramid.png"
								alt=""
								className="pyramidNumber"
							/>
						</div>
					</div>
					<div className="divForAbsolute smaller">
						<div className="pyramid-card">
							<h3 className="pyramidTitle">Точки дифференциации</h3>
							<h6 className="miniTitle">Анализируем преимущества продукта:</h6>
							<ul className="pyramid-ul longPyramidUl">
								<li className="pyramid-li">
									Ищем уникальные характеристики, выделяющие продукт на фоне
									конкурентов для вашей целевой аудитории.
								</li>
								<li className="pyramid-li">
									Выявляем функциональные преимущества, значимые для всей
									категории продуктов.
								</li>
								<li className="pyramid-li">
									Отмечаем достоинства конкурентов, отвечающие потребностям
									вашей целевой аудитории (что важно учитывать).
								</li>
								<li className="pyramid-li">
									Определяем эмоциональные достоинства - какие чувства и
									впечатления этот продукт вызывает у потребителей.
								</li>
							</ul>
							<img
								src="/business-strategy-project/MainPage/fliped1.png"
								alt=""
								className="flipped"
							/>
							<img
								src="/business-strategy-project/MainPage/03-pyramid.png"
								alt=""
								className="pyramidNumber"
							/>
						</div>
					</div>
					<div className="divForAbsolute small">
						<div className="pyramid-card">
							<h3 className="pyramidTitle">Характер и ценности бренда</h3>
							<p className="pyramidDesc longerDesc">
								В идеале характер и ценности вашего бренда должны совпадать с
								характером и ценностями вашей аудитории. Именно так мы находим
								лучших друзей — понимаем, что очень похожи. Именно такая дружба
								длится всю жизнь. Допустим, вы производите экопродукты. Ваши
								ценности: экологичность и натуральность. Характер: дружелюбный,
								искренний. Человек с таким же мировоззрением обязательно вас
								заметит.
							</p>
							<img
								src="/business-strategy-project/MainPage/fliped2.png"
								alt=""
								className="flipped"
							/>
							<img
								src="/business-strategy-project/MainPage/02-pyramid.png"
								alt=""
								className="pyramidNumber"
							/>
						</div>
					</div>
					<div className="divForAbsolute normal">
						<div className="pyramid-card ">
							<h3 className="pyramidTitle">Дизайн-код</h3>
							<p className="pyramidDesc shorterDesc">
								Это образ бренда, такой как логотип, цветовая гамма, шрифты,
								иллюстрации, упаковка, ароматы и другие элементы, которые
								привлекают внимание потребителей. Это базовое основание, работа
								над которым проводится в последнюю очередь.
							</p>
							<img
								src="/business-strategy-project/MainPage/fliped5.png"
								alt=""
								className="flipped"
							/>
							<img
								src="/business-strategy-project/MainPage/01-pyramid.png"
								alt=""
								className="pyramidNumber"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="whyWe-wrapper">
				<div className="whyWe-head">
					<img
						src="/business-strategy-project/MainPage/whyWe-title.png"
						alt=""
						className="whyWe-title"
					/>
				</div>

				<div className="whyWe-body">
					<div className="whyWe-card">
						<h3 className="whyWeCardTitle">Индивидуальный подход</h3>
						<p className="whyWeCardDesc">
							Мы создаем каждую стратегию с учетом особенностей вашего бренда и
							рыночной среды, избегая шаблонных решений.
						</p>
						<img
							src="/business-strategy-project/MainPage/fliped1.png"
							alt=""
							className="flipped"
						/>
					</div>
					<div className="whyWe-card">
						<h3 className="whyWeCardTitle">Вовлечение ТОП-менеджмента</h3>
						<p className="whyWeCardDesc">
							Мы активно сотрудничаем с представителями вашей компании, чтобы
							обеспечить понимание и поддержку ценностей бренда на всех уровнях.
						</p>
						<img
							src="/business-strategy-project/MainPage/fliped5.png"
							alt=""
							className="flipped"
						/>
					</div>
					<div className="whyWe-card">
						<h3 className="whyWeCardTitle">Документирование</h3>
						<p className="whyWeCardDesc">
							Вы получите полный отчет с деталями стратегии, который будет ясен
							и понятен. Мы также предоставим поддержку и дополнительные
							пояснения на презентации концепции.
						</p>
						<img
							src="/business-strategy-project/MainPage/flipped6.png"
							alt=""
							className="flipped"
						/>
					</div>
					<div className="whyWe-card">
						<h3 className="whyWeCardTitle">Поддержка на этапе внедрения</h3>
						<p className="whyWeCardDesc">
							Мы не просто разрабатываем стратегию, но и оказываем помощь при ее
							реализации. Наши инструменты не останутся без внимания, мы поможем
							внедрить разработанные решения.
						</p>
						<img
							src="/business-strategy-project/MainPage/fliped3.png"
							alt=""
							className="flipped"
						/>
					</div>
				</div>

				<div className="whyWe-foot">
					<h3 className="whyWeCardTitle"> Опытные специалисты</h3>
					<p className="whyWeCardDesc whyWeFootDesc">
						Наша команда имеет многолетний опыт в стратегическом маркетинге,
						провели множество аудитов и мастер-классов по позиционированию и
						продвижению бренда.
					</p>
					<img
						src="/business-strategy-project/MainPage/fliped4.png"
						alt=""
						className="flipped"
					/>
				</div>
			</div>

			<footer className="footer">
				<div className="footer-left">
					<div className="footer-title vremya">
						<img
							src="/business-strategy-project/MainPage/brand-foot-title.png"
							alt=""
						/>
					</div>

					<div className="titlle">
						<img src="/business-strategy-project/MainPage/Titlle.png" alt="" />
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
									src="/business-strategy-project/MainPage/Vector (1).png"
									alt=""
									className="app-logo"
								/>
								<img
									src="/business-strategy-project/MainPage/Vector (2).png"
									alt=""
									className="app-logo"
								/>
								<img
									src="/business-strategy-project/MainPage/Vector (3).png"
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
						<img
							src="/business-strategy-project/MainPage/main-foot-title.png"
							alt=""
						/>
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

				<img
					src="/business-strategy-project/MainPage/Rectangle 72.png"
					alt=""
					className="foot-fold"
				/>
				<img
					src="/business-strategy-project/MainPage/shadow.png"
					alt=""
					className="foot-shadow"
				/>
			</footer>

			<div className="background-effect">
				<div></div>
			</div>

			<Logics />
		</>
	);
};

export default Brand;

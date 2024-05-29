import "../Card/Card.css";
import "../Card/CardResponsive.css";

const Card = () => {
	return (
		<>
			<div className="card-wrapper">
				<div className="innerHead">
					<h2 className="main-title">
						<span className="yellowFont">Сайты-визитки, </span>
						которые оставляют впечатление
					</h2>
					<p className="title-desc">
						Создаем лендинг, который улучшает репутацию бренда, увеличивает
						прибыль компании и повышает лояльность клиентов.
					</p>
				</div>

				<div className="first-part">
					<h3 className="generalTitle first-title">Что такое сайт-визитка?</h3>
					<p className="firstSectionDesc">
						Сайт — это цифровая визитка вашего бизнеса в онлайн-мире, включающая
						все необходимые элементы для эффективного функционирования и
						развития вашей компании в любой ситуации
					</p>
					<p className="firstSectionDesc">
						Главная цель сайта-визитки - вызвать интерес у посетителей и
						предоставить им достаточно информации для принятия решения о
						сотрудничестве. Она является эффективным инструментом для компаний,
						желающих увеличить свою онлайн-присутствие и привлечь новых
						клиентов.
					</p>

					<div className="firstImgWrap">
						<img
							src="/business-strategy-project/MainPage/card-main-img.png"
							alt=""
							className="firstSectionImg"
						/>
					</div>
				</div>

				<div className="second-part">
					<h3 className="generalTitle second-title">
						Причины, по которым бизнесам нужен лендинг
					</h3>
					<div className="second-body">
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">Увеличение дохода компании</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">Повышение лояльности клиентов</p>
							</div>
						</div>
						<div className="secondBodyItem">
							<img
								src="/business-strategy-project/MainPage/flash.png"
								alt=""
								className="flash"
							/>
							<div className="flashInfo">
								<p className="flashDesc">Расширение клиентской базы</p>
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
									Улучшение качества обслуживания пользователей
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
									Повышение репутации и статуса вашего бренда
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
									Расширение возможностей вашей компании
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* extra repeat */}
				<div className="fourth-part">
					<h3 className="generalTitle">
						Сайт-визитка решает ряд проблем, с которыми может столкнуться
						компания
					</h3>

					<div className="fourthSectionBody">
						<div className="fourthBodyItem">
							<div className="fourthInnerItem smallCard">
								<p className="fourthInnerDesc">
									Недостаточное онлайн-присутствие: когда у вашего бизнеса нет
									веб-сайта, он упускает возможность привлечения новых клиентов
									из онлайн-среды.
								</p>
							</div>
							<div className="fourthInnerItem smallCard">
								<p className="fourthInnerDesc">
									Неудобство для клиентов: отсутствие сайта усложняет поиск
									ваших клиентов информацию о компании, ее продуктах и услугах.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem ">
							<div className="fourthInnerItem smallCard smallTwoInOne TwoInOne">
								<p className="fourthInnerDesc">
									Ограниченные коммуникационные возможности: сайт-визитка
									позволяет компании эффективно коммуницировать с клиентами,
									предоставляя им важную информацию и обратную связь.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="fourthInnerItem smallCard">
								<p className="fourthInnerDesc">
									Ограниченные маркетинговые возможности: сайт-визитка позволяет
									бизнесу использовать онлайн-маркетинговые инструменты, такие
									как контент-маркетинг, SEO и рекламу, чтобы привлечь новый
									поток клиентов.
								</p>
							</div>
							<div className="fourthInnerItem smallCard">
								<p className="fourthInnerDesc">
									Недостаточное доверие со стороны целевой аудитории: наличие
									качественного сайта помогает установить доверие среди
									потенциальных клиентов и создать впечатление о
									профессионализме компании.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* extra repeat */}

				<div className="third-part">
					<h3 className="generalTitle thirdTitle">О нас</h3>
					<p className="thirdDesc">
						Наша компания является экспертом в области создания сайтов для
						бизнеса и медиа. В современном мире иметь просто обычный
						сайт-визитку недостаточно. Клиенты хотят увидеть не просто
						информацию, но и чувствовать ваш бренд через сайт. Нужен сайт,
						который не просто представляет ваш бизнес, но и запоминается и
						вызывает желание вернуться.
					</p>
					<p className="thirdDesc">
						Мы разрабатываем уникальные сайты-визитки, которые привлекают
						внимание, эффективно передают вашу уникальность и оставляют
						впечатление. Мы создаем сайты, которые помогают вашему бизнесу
						выделиться из толпы и создать сильное первое впечатление.
					</p>

					<div className="third-body">
						<img
							src="/business-strategy-project/MainPage/corporateFirst.png"
							alt=""
							className="thirdBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/corporateSecond.png"
							alt=""
							className="thirdBodyImg"
						/>
						<img
							src="/business-strategy-project/MainPage/corporateThird.png"
							alt=""
							className="thirdBodyImg"
						/>
					</div>
				</div>

				<div className="fourth-part">
					<h3 className="generalTitle">
						5 шагов, чтобы создать привлекательный сайт-визитку
					</h3>

					<div className="fourthSectionBody">
						<div className="fourthBodyItem">
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Брифинг и анализ</h4>
								<p className="fourthInnerDesc">
									Мы начинаем с внимательного изучения вашего бизнеса, его целей
									и целевой аудитории. Это помогает нам создать сайт, который
									будет наилучшим образом отражать вашу уникальность и
									привлекать именно вашу целевую аудиторию.
								</p>
							</div>
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Концепция и дизайн</h4>
								<p className="fourthInnerDesc">
									Наши дизайнеры разрабатывают концепцию вашего сайта, учитывая
									вашу брендовую идентичность и ваши цели. Мы создаем уникальный
									дизайн, который будет привлекать внимание и запоминаться.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem ">
							<div className="fourthInnerItem TwoInOne">
								<h4 className="fourthInnerTitle">Запуск и поддержка</h4>
								<p className="fourthInnerDesc">
									После успешного запуска мы не просто оставляем вас наедине с
									вашим сайтом. Мы предлагаем постоянную поддержку и обновления,
									чтобы ваш сайт всегда оставался актуальным и эффективным.
								</p>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Разработка и создание</h4>
								<p className="fourthInnerDesc">
									На этом этапе мы создаем ваш сайт-визитку, используя
									современные технологии и лучшие практики веб-разработки. Мы
									делаем все возможное, чтобы ваш сайт работал быстро, без сбоев
									и выглядел привлекательно на любом устройстве.
								</p>
							</div>
							<div className="fourthInnerItem">
								<h4 className="fourthInnerTitle">Тестирование и оптимизация</h4>
								<p className="fourthInnerDesc">
									Перед запуском мы проводим тщательное тестирование вашего
									сайта, чтобы убедиться, что он работает корректно и
									соответствует всем вашим требованиям. Мы также оптимизируем
									его для лучшей производительности и SEO.
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
						Наши названия уже зарекомендовали себя и активно функционируют в
						бизнесе
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
							Закажите разработку оригинального сайта-визитки!
						</h3>
						<div className="getsFlex">
							<p className="sixth-foot-desc">
								Остались вопросы? Отправьте заявку, и мы свяжемся с Вами в
								ближайшее время
							</p>

							<button className="sixth-foot-btn">Заполнить бриф →</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Card;

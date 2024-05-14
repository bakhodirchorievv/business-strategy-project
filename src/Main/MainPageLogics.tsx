import { useEffect } from "react";

const Logics = () => {
	useEffect(() => {
		const bckgEffectWrapper = document.querySelector(
			".background-effect"
		) as HTMLElement | null;
		const listItems = document.querySelectorAll(
			".list-item"
		) as NodeListOf<HTMLElement>;
		const mainPageWrapper = document.querySelector(
			".mainPageWrapper"
		) as HTMLElement | null;
		const contacts = document.querySelector(
			".contacts-wrapper"
		) as HTMLElement | null;
		const aboutCompany = document.querySelector(
			".about-company-wrapper"
		) as HTMLElement | null;
		const readyCases = document.querySelector(
			".ready-cases-wrapper"
		) as HTMLElement | null;
		const vremya = document.querySelector(".vremya") as HTMLElement | null;
		const titlle = document.querySelector(".titlle") as HTMLElement | null;

		if (
			!bckgEffectWrapper ||
			!mainPageWrapper ||
			!contacts ||
			!aboutCompany ||
			!readyCases ||
			!vremya ||
			!titlle
		) {
			return;
		}

		for (let i = 0; i < 3000; i++) {
			let newDiv = document.createElement("div");
			bckgEffectWrapper.append(newDiv);
		}

		const handleClick = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			vremya.style.display = "block";
			titlle.style.display = "none";

			if (target.classList.contains("head-company")) {
				mainPageWrapper.style.display = "none";
				contacts.style.display = "none";
				readyCases.style.display = "none";
				aboutCompany.style.display = "block";

				listItems.forEach((item) => {
					item.style.color = "rgba(117, 127, 147, 1)";
				});
				target.style.color = "white";
			} else if (target.classList.contains("head-contact")) {
				mainPageWrapper.style.display = "none";
				aboutCompany.style.display = "none";
				readyCases.style.display = "none";
				contacts.style.display = "flex";

				listItems.forEach((item) => {
					item.style.color = "rgba(117, 127, 147, 1)";
				});
				target.style.color = "white";
			} else if (target.classList.contains("head-service")) {
				mainPageWrapper.style.display = "none";
				aboutCompany.style.display = "none";
				contacts.style.display = "none";
				readyCases.style.display = "block";

				listItems.forEach((item) => {
					item.style.color = "rgba(117, 127, 147, 1)";
				});
				target.style.color = "white";
			} else if (target.classList.contains("head-case")) {
				aboutCompany.style.display = "none";
				contacts.style.display = "none";
				readyCases.style.display = "none";
				mainPageWrapper.style.display = "block";

				listItems.forEach((item) => {
					item.style.color = "rgba(117, 127, 147, 1)";
				});
				target.style.color = "white";
			}
		};

		listItems.forEach((listItem) => {
			listItem.addEventListener("click", handleClick);
		});

		return () => {
			listItems.forEach((listItem) => {
				listItem.removeEventListener("click", handleClick);
			});
		};
	}, []);

	return null;
};

export default Logics;

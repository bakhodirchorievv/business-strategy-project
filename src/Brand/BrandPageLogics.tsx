import { useEffect } from "react";

const Logics = () => {
	useEffect(() => {
		const bckgEffectWrapper = document.querySelector(
			".background-effect"
		) as HTMLElement | null;

		if (!bckgEffectWrapper) {
			return;
		}

		for (let i = 0; i < 2500; i++) {
			let newDiv = document.createElement("div");
			bckgEffectWrapper.append(newDiv);
		}
	}, []);

	return null;
};

export default Logics;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 20);
	}, [pathname]);

	return null;
};

export default ScrollToTop;

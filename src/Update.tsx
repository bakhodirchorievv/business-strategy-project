import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Update = () => {
	const location = useLocation();

	useEffect(() => {
		const lastPathname = sessionStorage.getItem("lastPathname");
		if (lastPathname !== location.pathname) {
			sessionStorage.setItem("lastPathname", location.pathname);
			window.location.reload();
		}
	}, [location]);

	return null;
};
export default Update;

import React, { useEffect, useState } from "react";

type UpdateProps = {
	children: React.ReactNode;
};

const Update: React.FC<UpdateProps> = ({ children }) => {
	const [, setUpdate] = useState(0);

	useEffect(() => {
		setUpdate((prev) => prev + 1);
	}, []);

	return <>{children}</>;
};

export default Update;

import { Link } from "react-router-dom";

import { db } from "../../Components/AdminDashboard/FirebaseConfig";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import "./CasesPart.css";
import "./CasesPartResponsive.css";

interface Case {
	id: string;
	title: string;
	desc: string;
	imageUrl: string;
	userId?: string;
}

const CasesPart = () => {
	const [caseList, setCaseList] = useState<Case[]>([]);
	const casesCollectionRef = collection(db, "cases");

	const [isLoading, setIsLoading] = useState(true);
	const getCaseList = async () => {
		setIsLoading(true);
		try {
			const data = await getDocs(casesCollectionRef);
			const filteredData: Case[] = data.docs.map((doc) => ({
				...(doc.data() as Omit<Case, "id">),
				id: doc.id,
			}));
			setCaseList(filteredData);
			setIsLoading(false);
		} catch (error) {
			console.error(error);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		getCaseList();
		console.log(caseList);
	}, []);
	return (
		<div className="cases-wrapper hidden">
			<h2 className="case-title getBlock overallTitle topTitle">Кейсы</h2>
			{isLoading ? (
				<div className="loading-indicator">
					<ClipLoader size={50} color={"#eee"} loading={isLoading} />
				</div>
			) : (
				<div className="case-left">
					{caseList.length &&
						caseList.slice(0, 3).map((caseItem, index) => (
							<div
								className={`left-case-item fromCenter ${
									index === 2 ? "bigger" : ""
								}`}
								key={caseItem.id}
							>
								<div
									className="whiteBack"
									style={{ backgroundImage: `url(${caseItem.imageUrl})` }}
								></div>
								<h3 className="caseTitle">{caseItem.title || "Valor"}</h3>
								<p className="case-desc">
									{caseItem.desc || "Ювелирные изделия"}
								</p>
								<div className="caseBtnWrapper">
									<Link to={"/Logo"}>
										<button className="overallBtn caseBtn">Логотип</button>
									</Link>
									<button className="overallBtn caseBtn">Брендинг</button>
									<Link to={"/Site"}>
										<button className="overallBtn caseBtn">Сайт</button>
									</Link>
								</div>
							</div>
						))}
				</div>
			)}

			<div className="case-right">
				<h2 className="case-title getNone overallTitle">Кейсы</h2>

				{caseList.length &&
					caseList.slice(3, 5).map((caseItem, index) => (
						<div
							className={`left-case-item fromCenter ${
								index === 2 ? "bigger" : ""
							}`}
							key={caseItem.id}
						>
							<div
								className="whiteBack"
								style={{ backgroundImage: `url(${caseItem.imageUrl})` }}
							></div>
							<h3 className="caseTitle">{caseItem.title || "Valor"}</h3>
							<p className="case-desc">
								{caseItem.desc || "Ювелирные изделия"}
							</p>
							<div className="caseBtnWrapper">
								<Link to={"/Logo"}>
									<button className="overallBtn caseBtn">Логотип</button>
								</Link>
								<button className="overallBtn caseBtn">Брендинг</button>
								<Link to={"/Site"}>
									<button className="overallBtn caseBtn">Сайт</button>
								</Link>
							</div>
						</div>
					))}

				<button
					style={{ display: isLoading ? "none" : "block" }}
					className="overallBtn hasHover moreCaseBtn hidden"
				>
					больше кейсов →
				</button>
			</div>
			<img
				src="/business-strategy-project/MainPage/bckg-layer.png"
				alt=""
				className="bckg-layer hidden getNone"
			/>
		</div>
	);
};

export default CasesPart;

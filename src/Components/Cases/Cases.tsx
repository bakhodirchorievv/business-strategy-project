import { Link } from "react-router-dom";
import "../Cases/Cases.css";
import "../Cases/CasesResponsive.css";

import { db } from "../../Pages/AdminDashboard/FirebaseConfig";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";

interface Case {
	id: string;
	title: string;
	desc: string;
	imageUrl: string;
	userId?: string;
}

const Cases = () => {
	const [caseList, setCaseList] = useState<Case[]>([]);
	const casesCollectionRef = collection(db, "cases");

	const getCaseList = async () => {
		try {
			const data = await getDocs(casesCollectionRef);
			const filteredData: Case[] = data.docs.map((doc) => ({
				...(doc.data() as Omit<Case, "id">),
				id: doc.id,
			}));
			setCaseList(filteredData);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getCaseList();
	}, []);

	return (
		<>
			<div className="cases-wrapper">
				<h3 className="cases-title">Готовые кейсы</h3>
				<div className="cases-body">
					{caseList.map((caseItem) => (
						<div className="case-item" key={caseItem.id}>
							<div
								className="white-back"
								style={{ backgroundImage: `url(${caseItem.imageUrl})` }}
							></div>
							<div className="caseItemInfo">
								<div>
									<h4 className="caseItemTitle">
										{caseItem.title || "Пропорция"}
									</h4>
									<p className="caseItemDesc">
										{caseItem.desc || "Салон красоты"}
									</p>
								</div>
								<Link to={"/Site"}>
									<button className="caseItemBtn">Сайт</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Cases;

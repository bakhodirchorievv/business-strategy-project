import { Link } from "react-router-dom";
import "../Cases/Cases.css";
import "../Cases/CasesResponsive.css";

const Cases = () => {
	return (
		<>
			<div className="cases-wrapper">
				<h3 className="cases-title">Готовые кейсы</h3>
				<div className="cases-body">
					<div className="case-item">
						<div className="white-back"></div>
						<div className="caseItemInfo">
							<div>
								<h4 className="caseItemTitle">Пропорция</h4>
								<p className="caseItemDesc">Салон красоты</p>
							</div>
							<Link to={"/Site"}>
								<button className="caseItemBtn">Сайт</button>
							</Link>
						</div>
					</div>
					<div className="case-item">
						<div className="white-back"></div>
						<div className="caseItemInfo">
							<div>
								<h4 className="caseItemTitle">Пропорция</h4>
								<p className="caseItemDesc">Салон красоты</p>
							</div>
							<Link to={"/Site"}>
								<button className="caseItemBtn">Сайт</button>
							</Link>
						</div>
					</div>
					<div className="case-item">
						<div className="white-back"></div>
						<div className="caseItemInfo">
							<div>
								<h4 className="caseItemTitle">Пропорция</h4>
								<p className="caseItemDesc">Салон красоты</p>
							</div>
							<Link to={"/Site"}>
								<button className="caseItemBtn">Сайт</button>
							</Link>
						</div>
					</div>
					<div className="case-item">
						<div className="white-back"></div>
						<div className="caseItemInfo">
							<div>
								<h4 className="caseItemTitle">Пропорция</h4>
								<p className="caseItemDesc">Салон красоты</p>
							</div>
							<Link to={"/Site"}>
								<button className="caseItemBtn">Сайт</button>
							</Link>
						</div>
					</div>
					<div className="case-item">
						<div className="white-back"></div>
						<div className="caseItemInfo">
							<div>
								<h4 className="caseItemTitle">Пропорция</h4>
								<p className="caseItemDesc">Салон красоты</p>
							</div>
							<Link to={"/Site"}>
								<button className="caseItemBtn">Сайт</button>
							</Link>
						</div>
					</div>
					<div className="case-item">
						<div className="white-back"></div>
						<div className="caseItemInfo">
							<div>
								<h4 className="caseItemTitle">Пропорция</h4>
								<p className="caseItemDesc">Салон красоты</p>
							</div>
							<Link to={"/Site"}>
								<button className="caseItemBtn">Сайт</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cases;

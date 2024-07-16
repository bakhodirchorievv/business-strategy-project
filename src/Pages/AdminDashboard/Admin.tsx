import "./Admin.css";
import AdminAuth from "./AdminAuth";
import { db, auth, storage } from "./FirebaseConfig";
import { useEffect, useRef, useState } from "react";
import {
	getDocs,
	collection,
	addDoc,
	deleteDoc,
	updateDoc,
	doc,
} from "firebase/firestore";

import { onAuthStateChanged } from "firebase/auth";

import {
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from "firebase/storage";

interface Case {
	id: string;
	title: string;
	desc: number;
	imageUrl: string;
	userId?: string;
}

const Admin = () => {
	const [CaseList, setCaseList] = useState<Case[]>([]);

	//new Case states
	const [newCaseTitle, setnewCaseTitle] = useState("");
	const [newdesc, setNewdesc] = useState("");
	const [updatedDesc, setupdatedDesc] = useState("");
	const [updatedTitle, setUpdatedTitle] = useState("");
	const [userEmail, setUserEmail] = useState<string | null>(null);
	const [newCaseImage, setNewCaseImage] = useState<File | null>(null);
	const [updatedImage, setUpdatedImage] = useState<File | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const updatedImageFile = useRef<HTMLInputElement>(null);

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

		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUserEmail(user.email);
			} else {
				setUserEmail(null);
			}
		});

		return () => unsubscribe();
	}, []);

	const onSubmitCase = async () => {
		if (newCaseImage && newdesc && newCaseTitle) {
			const imageRef = ref(storage, `images/${newCaseImage.name}`);
			await uploadBytes(imageRef, newCaseImage);
			const imageUrl = await getDownloadURL(imageRef);

			try {
				await addDoc(casesCollectionRef, {
					title: newCaseTitle,
					desc: newdesc,
					imageUrl: imageUrl,
					userId: auth?.currentUser?.uid,
				});

				getCaseList();
				setnewCaseTitle("");
				setNewdesc("");
				setNewCaseImage(null);

				if (fileInputRef.current) {
					fileInputRef.current.value = "";
				}
			} catch (error) {
				console.error(error);
			}
		} else {
			console.error("Something is not selected (image or title or desc)");
		}
	};

	const deleteCase = async (id: string, imageUrl: string) => {
		try {
			const CaseDoc = doc(db, "cases", id);
			await deleteDoc(CaseDoc);

			if (imageUrl) {
				const imageRef = ref(storage, imageUrl);
				try {
					await deleteObject(imageRef);
					console.log("Image deleted successfully");
				} catch (imageError) {
					console.error("Error deleting image: ", imageError);
				}
			}

			getCaseList();
			console.log("Case and image deleted");
		} catch (error) {
			console.error("Error deleting Case or image: ", error);
		}
	};

	const onUpdateTitle = async (id: string) => {
		try {
			const CaseDoc = doc(db, "cases", id);
			await updateDoc(CaseDoc, { title: updatedTitle });
			getCaseList();
			setUpdatedTitle("");
			console.log("Case updated");
		} catch (error) {
			console.error("while updating title", error);
		}
	};

	const onUpdateImage = async (id: string, currentImageUrl: string) => {
		if (updatedImage) {
			try {
				const imageRef = ref(storage, `images/${updatedImage.name}`);
				await uploadBytes(imageRef, updatedImage);
				const imageUrl = await getDownloadURL(imageRef);

				const CaseDoc = doc(db, "cases", id);

				// Delete the old image from Firebase Storage if it exists
				if (currentImageUrl) {
					const oldImageRef = ref(storage, currentImageUrl);
					await deleteObject(oldImageRef);
				}

				await updateDoc(CaseDoc, { imageUrl });
				getCaseList();
				setUpdatedImage(null);

				if (updatedImageFile.current) {
					updatedImageFile.current.value = "";
				}
				console.log("Image updated");
			} catch (error) {
				console.error("Error updating image: ", error);
			}
		} else {
			console.error("No image selected for update");
		}
	};

	const onDeleteImage = async (id: string, imageUrl: string) => {
		const imageRef = ref(storage, imageUrl);

		try {
			await deleteObject(imageRef);

			const CaseDoc = doc(db, "cases", id);
			await updateDoc(CaseDoc, { imageUrl: "" });

			getCaseList();
			console.log("Image deleted");
		} catch (error) {
			console.error("Error deleting image: ", error);
		}
	};

	const onUpDatedesc = async (id: string) => {
		try {
			const CaseDoc = doc(db, "cases", id);
			await updateDoc(CaseDoc, { desc: updatedDesc });
			getCaseList();
			setupdatedDesc("");
			console.log("Case date updated");
		} catch (error) {
			console.error("while updating release date", error);
		}
	};

	return (
		<div className="adminWrapper">
			<AdminAuth />

			{userEmail && (
				<div className="controlAuthWrapper">
					<h2 className="addCaseTitle">Add New Case</h2>
					<input
						className="admin-input"
						type="text"
						placeholder="Case title..."
						value={newCaseTitle}
						onChange={(e) => setnewCaseTitle(e.target.value)}
					/>
					<input
						className="admin-input"
						type="text"
						placeholder="Case desc..."
						value={newdesc}
						onChange={(e) => setNewdesc(e.target.value)}
					/>

					<input
						className="admin-input"
						type="file"
						ref={fileInputRef}
						onChange={(e) =>
							setNewCaseImage(e.target.files ? e.target.files[0] : null)
						}
					/>

					<button className="admin-btn" onClick={onSubmitCase}>
						Submit Case
					</button>
				</div>
			)}

			{userEmail && (
				<div className="controlDataWrapper">
					{CaseList.map((Case) => (
						<div className="caseItemWrapperFire" key={Case.id}>
							{userEmail && (
								<>
									<h1 style={{ color: "white" }}>{Case.title}</h1>
									<p>{Case.desc}</p>
									{Case.imageUrl && (
										<img
											className="caseImgFire"
											src={Case.imageUrl}
											alt={Case.title}
											width="500"
										/>
									)}

									<button
										className="admin-btn"
										onClick={() => deleteCase(Case.id, Case.imageUrl)}
									>
										Delete Case
									</button>
									<br />
									<input
										className="admin-input"
										onChange={(e) => setUpdatedTitle(e.target.value)}
										type="text"
										value={updatedTitle}
										placeholder="new title..."
									/>
									<button
										className="admin-btn"
										onClick={() => onUpdateTitle(Case.id)}
									>
										Update Title
									</button>
									<br />
									<input
										className="admin-input"
										type="file"
										ref={updatedImageFile}
										onChange={(e) =>
											setUpdatedImage(e.target.files ? e.target.files[0] : null)
										}
									/>
									<button
										className="admin-btn"
										onClick={() => onUpdateImage(Case.id, Case.imageUrl)}
									>
										Update Image
									</button>
									<br />
									<button
										className="admin-btn"
										onClick={() => onDeleteImage(Case.id, Case.imageUrl)}
									>
										Delete Image
									</button>

									<br />
									<input
										className="admin-input"
										type="text"
										onChange={(e) => setupdatedDesc(e.target.value)}
										value={updatedDesc}
										placeholder="new desc..."
									/>
									<button
										className="admin-btn"
										onClick={() => onUpDatedesc(Case.id)}
									>
										Update Desc
									</button>
								</>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Admin;

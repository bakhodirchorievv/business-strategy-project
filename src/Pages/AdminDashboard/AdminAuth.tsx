import { useState, useEffect } from "react";
import { auth, googleProvider } from "./FirebaseConfig";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";

const AdminAuth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState<string | null>(null);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const signIn = async () => {
		try {
			await createUserWithEmailAndPassword(auth, email, password);
			setMessage("Successfully logged in!");
		} catch (error) {
			console.error(error);
			setMessage("Error logging in");
		}
	};

	const signInWithGoogle = async () => {
		try {
			await signInWithPopup(auth, googleProvider);
			setMessage("Successfully logged in!");
		} catch (error) {
			console.error(error);
			setMessage("Error logging in!");
		}
	};

	const logOut = async () => {
		try {
			await signOut(auth);
			setMessage("Successfully logged out!");
		} catch (error) {
			console.error(error);
			setMessage("Error logging out!");
		}
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
		});

		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (message) {
			const timer = setTimeout(() => {
				setMessage(null);
			}, 3000);
			return () => clearTimeout(timer);
		}
	}, [message]);

	return (
		<>
			{isLoggedIn ? (
				<button className="logOutFire admin-btn" onClick={logOut}>
					Log Out
				</button>
			) : (
				<div style={{ backgroundColor: "#333" }}>
					{message && <div className="message">{message}</div>}
					<input
						placeholder="Email..."
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						placeholder="Password..."
						type="password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
					<button onClick={signIn}>Sign In</button>
					<button onClick={signInWithGoogle}>Sign In With Google</button>
				</div>
			)}
		</>
	);
};

export default AdminAuth;

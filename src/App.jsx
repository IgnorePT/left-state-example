import { useState } from "react";
import styles from "./App.module.css";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
	const [user, setUser] = useState("João Cena");

	const handleUserChange = (user, type) => {
		console.log("User: ", user);
		console.log("Type: ", type);

		setUser(user);
	};

	return (
		<div className={styles.wrapper}>
			<Header user={user} />
			<Form user={user} setUser={handleUserChange} />
		</div>
	);
}

export default App;

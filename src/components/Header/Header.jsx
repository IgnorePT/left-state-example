import styles from "./Header.module.css";
import { User } from "react-feather";

function Header({ user }) {
	return (
		<div className={styles.header_wrapper}>
			<User style={{ color: "#f18f01" }} />
			<h3 className={styles.user_name}>{user}</h3>
		</div>
	);
}

export default Header;

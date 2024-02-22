import "./Form.css";

export default function Form(props) {
	return (
		<div
			style={{
				background: "#FFF",
				borderRadius: "30px",
				width: "400px",
				padding: "60px 40px",
			}}
		>
			<label htmlFor="nome">Nome de utilizador:</label>
			<input
				id="nome"
				value={props.user}
				onChange={(event) => {
					console.log(event.target.value);
					props.setUser(event.target.value, "Admin");
					//setUser()
				}}
				type="text"
				placeholder="Inserir nome"
			/>
		</div>
	);
}

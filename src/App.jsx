import "./Styles/styles.css";
import Input from "./components/Input";
import Items from "./components/Items";
import Total from "./components/Total";

function App() {
	return (
		<>
			<div className="container">
				<Input />
                <Items />
                <Total />
			</div>
		</>
	);
}

export default App;

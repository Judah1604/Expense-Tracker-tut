import "./styles/styles.css";

function Items() {
	return (
		<div className="items">
			<div className="item">
				<p className="name">Bread</p>
				<div className="price">
					$200{" "}
					<div className="icons">
						<div className="delete">
							<i class="fa-regular fa-trash-can"></i>
						</div>
						<div className="edit">
							<i class="fa-regular fa-pen-to-square"></i>
						</div>
					</div>
				</div>
			</div>
			<div className="item">
				<p className="name">Bread</p>
				<div className="price">
					$200{" "}
					<div className="icons">
						<div className="delete">
							<i class="fa-regular fa-trash-can"></i>
						</div>
						<div className="edit">
							<i class="fa-regular fa-pen-to-square"></i>
						</div>
					</div>
				</div>
			</div>
			<div className="item">
				<p className="name">Bread</p>
				<div className="price">
					$200{" "}
					<div className="icons">
						<div className="delete">
							<i class="fa-regular fa-trash-can"></i>
						</div>
						<div className="edit">
							<i class="fa-regular fa-pen-to-square"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Items;

import React from 'react'

function Input() {
  return (
		<div className="input">
			<input
				className="name-input"
				type="text"
				placeholder="Expense name"
			/>
			<div className="price">
				$
				<input
					className="price-input"
					type="number"
					name="Price"
					placeholder="Price"
				/>
			</div>
			<button>Add</button>
		</div>
  );
}

export default Input
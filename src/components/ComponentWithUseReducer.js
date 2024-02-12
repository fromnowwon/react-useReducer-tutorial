import React, { useReducer } from "react";

const reducer = () => {};

const ComponentWithUseReducer = () => {
	const deposit = (amount) => {
		dispatch({
			type: "DEPOSIT",
			payload: amount,
		});
	};
	const [amount, dispatch] = useReducer(reducer, 500);
	return <div>{amount}</div>;
};

export default ComponentWithUseReducer;

import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const TransactionContext = createContext();

const TransactionProvider = ({ children }) => {
	const [transactions, setTransaction] = useState([
		{
			id: 1,
			category: "salary",
			amount: 10000,
		},
		{
			id: 2,
			category: "rent",
			amount: -1000,
		},
		{
			id: 3,
			category: "groceries",
			amount: -500,
		},
	]);
	const deleteTransaction = (id) => {
		setTransaction(transactions.filter((transaction) => transaction.id !== id));
	};

	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});

	const balance = formatter.format(
		transactions.map((val) => val.amount).reduce((prev, curr) => prev + curr, 0)
	);

	const income = formatter.format(
		transactions
			.filter((transaction) => transaction.amount >= 0)
			.map((val) => val.amount)
			.reduce((prev, curr) => prev + curr, 0)
	);

	const expense = formatter.format(
		transactions
			.filter((transaction) => transaction.amount <= 0)
			.map((val) => val.amount)
			.reduce((prev, curr) => prev + curr, 0)
	);

	const addTransaction = (form) => {
		setTransaction([...transactions, { ...form, id: uuid() }]);
	};

	return (
		<TransactionContext.Provider
			value={{
				transactions,
				addTransaction,
				balance,
				income,
				expense,
				deleteTransaction,
			}}
		>
			{children}
		</TransactionContext.Provider>
	);
};
export default TransactionProvider;

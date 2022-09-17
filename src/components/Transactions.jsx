import { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import Transaction from "./Transaction";

const Transactions = () => {
	const { transactions } = useContext(TransactionContext);

	return (
		<>
			<h1 className='text-xl font-semibold'>Last Transactions</h1>
			<div className='h-[150px] overflow-y-auto'>
				<div className='space-y-2'>
					{transactions.map((transaction) => (
						<Transaction key={transaction.id} transaction={transaction} />
					))}
				</div>
			</div>
		</>
	);
};

export default Transactions;

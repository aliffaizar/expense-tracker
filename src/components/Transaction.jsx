import { useContext, useEffect, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { TransactionContext } from "../context/TransactionContext";

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(TransactionContext);
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	});
	return (
		<div
			className={`shadow bg-white flex items-center  px-3 py-1 border-l-4 ${
				transaction.amount > 0 ? " border-green-500" : " border-red-500"
			}`}
		>
			<div className='w-full flex justify-between items-center'>
				<div>{transaction.category}</div>
				<div>{formatter.format(transaction.amount)}</div>
			</div>
			<div className='flex-shrink-0 w-6 flex items-center justify-center'>
				<button
					onClick={() => deleteTransaction(transaction.id)}
					className='text-red-500'
				>
					<FaTimes />
				</button>
			</div>
		</div>
	);
};

export default Transaction;

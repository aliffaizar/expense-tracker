import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Head = () => {
	const { balance, income, expense } = useContext(TransactionContext);
	return (
		<div>
			<h1 className='text-2xl font-semibold text-center'>Expense Tracker</h1>
			<div className='text-center font-bold font-mono'>
				<div className='mt-3 text-xl'>Balance</div>
				<div className='text-4xl text-center'>{balance}</div>
			</div>
			<div className='flex gap-5'>
				<div className='w-full text-center py-3'>
					<h1>Income</h1>
					<h1 className='text-green-500'>{income}</h1>
				</div>
				<div className='w-full text-center py-3'>
					<h1>Expense</h1>
					<h1 className='text-red-500'>{expense}</h1>
				</div>
			</div>
		</div>
	);
};

export default Head;

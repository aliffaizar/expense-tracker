import { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Form = () => {
	const { addTransaction } = useContext(TransactionContext);
	const initForm = {
		category: "",
		amount: "",
	};
	const [form, setForm] = useState(initForm);
	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]:
				e.target.name === "amount" ? +e.target.value : e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addTransaction(form);
		setForm(initForm);
	};
	return (
		<>
			<h1 className='text-xl font-semibold'>Add Transaction</h1>
			<form onSubmit={handleSubmit} className='space-y-2'>
				<div className='space-y-1'>
					<label className='w-full block' htmlFor='category'>
						Expense Category
					</label>
					<input
						required
						className='w-full rounded outline px-3 py-1'
						id='category'
						type='text'
						name='category'
						value={form.category}
						onChange={handleChange}
					/>
				</div>
				<div className='space-y-1'>
					<label className='w-full block' htmlFor='amount'>
						Amount (income: positive value, expense: negative value)
					</label>
					<input
						required
						className='w-full rounded outline px-3 py-1'
						id='amount'
						type='number'
						name='amount'
						value={form.amount}
						onChange={handleChange}
					/>
				</div>
				<button
					className='px-3 py-1 rounded float-right bg-blue-500 text-white'
					type='submit'
				>
					add transaction
				</button>
			</form>
		</>
	);
};

export default Form;

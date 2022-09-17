import Form from "./components/Form";
import Head from "./components/Head";
import Transactions from "./components/Transactions";
import TransactionProvider from "./context/TransactionContext";

function App() {
	return (
		<TransactionProvider>
			<div className='w-[450px] mx-auto p-5 space-y-1'>
				<Head />
				<Transactions />
				<Form />
			</div>
		</TransactionProvider>
	);
}

export default App;

import ButtonControls from "./ButtonControls";

const CallTaker = () => {
	return (
		<div className="px-1">
			<h1 className="mb-5">CallTaker</h1>

			<div className="mb-10 w-full bg-slate-950 py-3 h-20 px-2 rounded-sm focus:outline-none text-l font-bold">
				Activity:
				<p className="text-xs mt-3">On Call ....</p>
			</div>

			<div className="mb-1">
				<input
					type="text"
					className="w-full bg-slate-950 py-3 h-20 px-2 rounded-sm text-center focus:outline-none text-2xl font-bold"
				/>
			</div>

			<ButtonControls />
		</div>
	);
};

export default CallTaker;

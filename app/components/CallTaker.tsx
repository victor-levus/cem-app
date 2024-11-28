import React from "react";

const CallTaker = () => {
	const numberKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "+", 0, "#"];

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

			<div className="flex sm:flex-col justify-center gap-5">
				<div className="grid grid-cols-3 gap-2 bg-slate-950 px-5 py-7 rounded-md w-full">
					{numberKeys.map((nk) => (
						<button
							key={nk}
							className="bg-slate-900 hover:bg-slate-800 basis-2/6 h-12 rounded-lg text-2xl font-bold"
						>
							{nk}
						</button>
					))}
				</div>

				<div className="col-span-3 flex gap-1">
					<button className="bg-red-950 w-full py-2 rounded-md text-lg font-bold hover:bg-red-900">
						End
					</button>
					<button className="bg-green-950 w-full py-2 rounded-md text-lg font-bold hover:bg-green-900">
						Dial
					</button>
				</div>
			</div>

			<div className="flex gap-1 mt-20">
				<button className="bg-slate-950 w-full py-2 rounded-md text-lg font-bold hover:bg-slate-800">
					Idle
				</button>
				<button className="bg-slate-950 w-full py-2 rounded-md text-lg font-bold hover:bg-slate-800">
					Mute
				</button>
				<button className="bg-slate-950 w-full py-2 rounded-md text-lg font-bold hover:bg-slate-800">
					HangUp
				</button>
			</div>
			<button className="bg-slate-950 w-full py-2 rounded-md text-lg font-bold hover:bg-slate-800 mt-5">
				Transfer
			</button>
		</div>
	);
};

export default CallTaker;

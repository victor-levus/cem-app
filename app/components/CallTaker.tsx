import React from "react";

const CallTaker = () => {
	const numberKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "+", 0, "#"];

	return (
		<div className="px-1">
			<h1 className="mb-5">CallTaker</h1>

			<div className="mb-10">
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
		</div>
	);
};

export default CallTaker;

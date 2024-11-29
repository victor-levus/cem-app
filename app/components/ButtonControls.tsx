"use client";

import React, { useState } from "react";

const ButtonControls = () => {
	const numberKeys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "+", 0, "#"];
	const [onCall, setOnCall] = useState(true);

	return (
		<div>
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
					<button className="bg-red-950 w-full py-2 rounded-md text-lg font-bold hover:bg-red-900 active:bg-red-950">
						End
					</button>
					<button className="bg-green-950 w-full py-2 rounded-md text-lg font-bold hover:bg-green-900 active:bg-green-950">
						Dial
					</button>
				</div>
			</div>

			<div className="flex gap-1 mt-20">
				<button className="bg-slate-950 w-full py-2 rounded-md text-lg font-bold hover:bg-slate-800 active:bg-slate-950">
					Idle
				</button>
				<button
					disabled={!onCall}
					className={`${
						onCall
							? "bg-slate-950 active:bg-slate-950"
							: "bg-slate-950 bg-opacity-50 text-gray-700"
					} w-full py-2 rounded-md text-lg font-bold hover:${
						onCall ? "bg-slate-800" : ""
					}`}
				>
					Mute
				</button>
				<button
					disabled={onCall}
					className={`${
						!onCall
							? "bg-slate-950 active:bg-slate-950"
							: "bg-slate-950 bg-opacity-50 text-gray-700"
					} w-full py-2 rounded-md text-lg font-bold hover:${
						!onCall ? "bg-slate-800" : ""
					}`}
				>
					Busy
				</button>
			</div>
			<button
				disabled={!onCall}
				className={`${
					onCall
						? "bg-slate-950 active:bg-slate-950"
						: "bg-slate-950 bg-opacity-50 text-gray-700"
				} w-full py-2 rounded-md text-lg font-bold mt-5 hover:${
					onCall ? "bg-slate-800" : ""
				} `}
			>
				Transfer Call
			</button>
		</div>
	);
};

export default ButtonControls;

import React from "react";

interface Props {
	title: string;
	name: string;
	inputType?: string;
	className?: string;
	// className?: HTMLProps<HTMLElement>["className"]
}

const AppInput = ({ inputType = "text", className, title, name }: Props) => {
	if (inputType === "text-area")
		return (
			<div className="flex flex-col gap-1">
				<label htmlFor={name} className="font-semibold text-gray-500">
					{title}
				</label>

				<textarea
					name={name}
					rows={name === "case_record" ? 12 : 2}
					className={`bg-slate-950 text-lg px-2 py-2 w-full rounded-md outline-none focus:outline-none font-semibold ${className}`}
				/>
			</div>
		);

	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={name} className="font-semibold text-gray-500">
				{title}
			</label>

			<input
				type={inputType}
				name={name}
				className={`bg-slate-950 text-lg px-2 py-2 w-full rounded-md outline-none focus:outline-none font-semibold ${className}`}
			/>
		</div>
	);
};

export default AppInput;

"use client";

import React from "react";
import AppInput from "./utils/AppInput";
import AppButton from "./utils/AppButton";

const CaseForm = () => {
	return (
		<form className="flex flex-col gap-4">
			<div className="grid grid-cols-2 gap-4">
				<AppInput title="Caller Surname" name="last_name" className="" />
				<AppInput title="Caller Other Names" name="other_names" className="" />
				<AppInput title="Caller Phone" name="phone" className="" />
				<AppInput title="Caller Sex" name="sex" className="" />
			</div>
			<AppInput
				inputType="text-area"
				title="Caller Address"
				name="address"
				className=""
			/>

			<div className="relative">
				<AppInput
					inputType="text-area"
					name="case_record"
					title="Case Report"
					className=""
				/>

				<AppButton
					title="Save"
					type="submit"
					className="bg-green-950 hover:bg-green-900 active:bg-green-950 absolute bottom-2 right-2 sm:w-[105px]"
				/>
			</div>
		</form>
	);
};

export default CaseForm;

import CallTaker from "./components/CallTaker";

export default function Home() {
	return (
		<main className="h-full px-1 pt-8">
			<div className="h-full sm:grid gap-1 grid-cols-6 grid-rows-2">
				<div className="col-span-1 row-span-2 bg-slate-900">
					<CallTaker />
				</div>
				<div className="col-span-3 row-span-2 bg-slate-900"></div>
				<div className="col-span-2 row-span-1 bg-slate-900"></div>
				<div className="col-span-2 row-span-1 bg-slate-900"></div>
			</div>
		</main>
	);
}

import { useMemo, useState } from 'react'

const tiers = [
	{
		name: 'Discovery',
		price: 'Fixed-fee',
		items: ['Workflow mapping', 'Prototype plan', 'Data checklist'],
	},
	{
		name: 'Implementation',
		price: 'Tiered',
		items: ['Build & modules', 'Compliance rules', 'Training'],
	},
	{
		name: 'Studio (beta)',
		price: 'Planned tiers',
		items: ['Starter', 'Team', 'Agency', 'Enterprise (on-prem/SSO)'],
	},
]

const Pricing = () => {
	const [docs, setDocs] = useState(50)
	const [hoursPer, setHoursPer] = useState(3)
	const savedHours = useMemo(
		() => Math.round(docs * hoursPer * 0.5),
		[docs, hoursPer]
	)

	return (
		<div className="space-y-6">
			<div className="border border-black dark:border-white p-6 lg:p-8">
				<h1 className="font-sans text-2xl lg:text-3xl mb-2">Pricing</h1>
				<p className="font-mono text-sm text-gray-600 dark:text-gray-400">
					Transparent tiers. Get a tailored quote.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{tiers.map(t => (
					<div
						key={t.name}
						className="border border-black dark:border-white p-6"
					>
						<h3 className="font-sans text-xl mb-1">{t.name}</h3>
						<p className="font-mono text-xs text-gray-500 mb-3">
							{t.price}
						</p>
						<ul className="font-mono text-sm space-y-2">
							{t.items.map(i => (
								<li key={i}>→ {i}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="border border-black dark:border-white p-6">
				<h2 className="font-sans text-xl mb-2">ROI estimator</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
					<label className="block font-mono text-xs">
						Docs/month
						<input
							type="number"
							className="w-full border border-black dark:border-white p-2 bg-transparent"
							value={docs}
							onChange={e => setDocs(+e.target.value)}
						/>
					</label>
					<label className="block font-mono text-xs">
						Hours per doc (current)
						<input
							type="number"
							className="w-full border border-black dark:border-white p-2 bg-transparent"
							value={hoursPer}
							onChange={e => setHoursPer(+e.target.value)}
						/>
					</label>
					<div className="font-mono text-sm">
						Typical time saved: ~{savedHours} hrs/month
					</div>
				</div>
				<div className="mt-3">
					<a
						href="/contact"
						className="px-4 py-2 border border-black dark:border-white font-mono text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
					>
						Get a tailored quote
					</a>
				</div>
			</div>
		</div>
	)
}

export default Pricing

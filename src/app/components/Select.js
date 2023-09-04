'use client'
import { useState } from 'react'

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

export default function Select({ label, options }) {
	const [selected, setSelected] = useState(options[0])

	return (
		<select value={selected} onChange={setSelected}>
			<>
				<label className="block text-sm font-medium leading-6 text-gray-900">
					{label}
				</label>
				<div className="relative mt-2">
					{options.map((option) => (
						<option
							key={option}
							className={({ active }) =>
								classNames(
									active ? 'bg-indigo-600 text-white' : 'text-gray-900',
									'relative cursor-default select-none py-2 pl-3 pr-9'
								)
							}
							value={option}
						></option>
					))}
				</div>
			</>
		</select>
	)
}

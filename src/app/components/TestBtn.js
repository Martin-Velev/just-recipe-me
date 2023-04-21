'use client'

import { API_ROOT } from '@/constants/constants'

export default function TestBtn() {
	async function testFn() {
		console.log('test')

		const resp =  await fetch(`${API_ROOT}/recipe`, {
			method: 'GET'
		})

		console.log(resp)

		// const resp = await fetch(`${API_ROOT}/recipe/create`, {
		// 	method: 'POST',
		// 	body: JSON.stringify({
		// 		name: 'Test Recipe',
		// 		ingredients: ['eggs', 'butter'],
		// 		instructions: 'Make em in a pan',
		// 	}),
		// })
	}

	return (
		<>
			<button onClick={testFn}>Test BTN</button>
		</>
	)
}

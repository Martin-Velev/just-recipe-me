'use client'

import { API_ROOT } from '@/constants/constants'
import { useState } from 'react'

const VARIANT_TABLE = {
	signup: {
		header: 'Register',
		submitBtn: 'Register',
		endpoint: API_ROOT + '/auth/signup',
	},
	signin: {
		header: 'Sign In',
		submitBtn: 'Sign In',
		endpoint: API_ROOT + '/auth/signin',
	},
}

export default function AuthForm({ variant = 'signup' }) {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const variantData = VARIANT_TABLE[variant]

	async function onSubmit() {
		const response = await fetch(variantData.endpoint, {
			method: 'POST',
			body: JSON.stringify({
				username,
				password,
			}),
		})
		const body = await response.json()
		const { jwt } = body
		if (jwt) {
			localStorage.setItem('jwt', jwt)
		}
	}

	return (
		<>
			<h2>{variantData.header}</h2>
			<form>
				<label htmlFor="username">Username:</label>
				<input
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					type="text"
				/>
				<br />
				<label htmlFor="password">Password:</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
				/>
				<br />
				<button onClick={onSubmit} type="button">
					{variantData.submitBtn}
				</button>
			</form>
		</>
	)
}

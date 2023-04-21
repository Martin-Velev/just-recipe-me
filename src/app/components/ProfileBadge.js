'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function ProfileBadge({ user }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const signedInMenu = (
		<div
			className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
		>
			<Link href="#" className="block px-4 py-2 text-sm text-gray-700">
				Sign out
			</Link>
		</div>
	)
	const notSignedInMenu = (
		<div
			className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
		>
			<Link
				href="/signup"
				className="block px-4 py-2 text-sm text-gray-700"
			>
				Sign up
			</Link>
			<Link
				href="/signin"
				className="block px-4 py-2 text-sm text-gray-700"
			>
				Log in
			</Link>
		</div>
	)

	const menu = user ? signedInMenu : notSignedInMenu
	return (
		<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
			<div className="relative ml-3">
				<div>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						type="button"
						className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
					>
						<span className="sr-only">Open user menu</span>
						<Image
							className="h-8 w-8 rounded-full"
							src="/example.png"
							alt=""
							width={8}
							height={8}
						/>
					</button>
				</div>

				{isMenuOpen && menu}
			</div>
		</div>
	)
}

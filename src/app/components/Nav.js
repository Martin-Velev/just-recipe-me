import Link from 'next/link'
import ProfileBadge from './ProfileBadge'

export default function Nav() {
	return (
		<header>
			<nav className="" aria-label="Global">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex flex-shrink-0 items-center"></div>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex space-x-4">
									<Link
										href="/"
										className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
										aria-current="page"
									>
										Home
									</Link>

									<Link
										href="/recipes"
										className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
									>
										Recipes
									</Link>
								</div>
							</div>
						</div>
						<ProfileBadge />
					</div>
				</div>
			</nav>
		</header>
	)
}

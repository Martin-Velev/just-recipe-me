import Nav from './components/Nav'
import './globals.css'

export const metadata = {
	title: 'Just recipes',
	description: 'Recipes without the bs',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Nav />

				{children}
			</body>
		</html>
	)
}

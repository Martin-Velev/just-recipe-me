import { SECRET } from '@/constants/constants'
import { exctractToken, verifyToken } from '@/lib/auth'

export async function GET(request, params) {
	const url = new URL(request.url)
	console.log('url', url.searchParams)
	// const token = exctractToken(request.headers)
	// const isValid = await verifyToken(token, SECRET)

	return new Response(JSON.stringify(url.searchParams))
}

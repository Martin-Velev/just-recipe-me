import { SECRET } from '@/constants/constants'
import { exctractToken, verifyToken } from '@/lib/auth'

export async function GET(request, params) {
	const url = new URL(request.url)

	return new Response(JSON.stringify(url.searchParams))
}

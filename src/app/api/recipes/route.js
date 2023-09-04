import dbConnect from '@/lib/dbConnect'
import Recipe from '@/models/recipe'

export async function GET(req, params) {
	dbConnect()

	const url = new URL(req.url)
	const limit = parseInt(url.searchParams.get('limit')) || 10
	const skip = parseInt(url.searchParams.get('offset')) || 0
	const query = url.searchParams.get('q')
	const queryRegEx = new RegExp(query, 'i')
	console.log('q', query)
	const filter = query
		? { $or: [{ name: queryRegEx }, { ingredients: queryRegEx }] }
		: {}
	const projection = 'name createdAt time img ingredients'
	const options = { limit, skip }

	const recipes = await Recipe.find(filter, projection, options)

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')
	return new Response(JSON.stringify(recipes), { headers })
}

export async function POST(req, params) {
	const userRecipe = await req.json()

	dbConnect()

	const recipe = await Recipe.create(userRecipe)

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')
	return new Response(JSON.stringify({ recipe }))
}

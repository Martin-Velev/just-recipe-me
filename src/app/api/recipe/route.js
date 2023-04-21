import dbConnect from '@/lib/dbConnect'
import Recipe from '@/models/recipe'

export async function GET(req, params) {
	dbConnect()

	const url = new URL(req.url)
	const limit = url.searchParams.get('limit') || 10
	const skip = url.searchParams.get('offset') || 0
	const filter = {}
	const projection = 'name createdAt time img ingredients'
	const options = { limit, skip }

	const recipes = await Recipe.find(filter, projection, options)

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')
	return new Response(JSON.stringify(recipes), {headers})
}

export async function POST(req, params) {

	const userRecipe = await req.json()

	console.log('recipe', userRecipe)
	dbConnect()

	const recipe = await Recipe.create(userRecipe)
	console.log('created', recipe)

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')
	return new Response(JSON.stringify({ recipe }))
}

import dbConnect from "@/lib/dbConnect"
import Recipe from "@/models/recipe"

export async function POST(req, params) {
	// console.log('req', req)
	// console.log('param', params)

	const userRecipe = await req.json()

	console.log('recipe', userRecipe)
	dbConnect()

	const recipe = await Recipe.create(userRecipe)
	console.log('created', recipe)

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')
	return new Response(JSON.stringify({ recipe }))
}
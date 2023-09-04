import dbConnect from "@/lib/dbConnect"
import Recipe from "@/models/recipe"

export async function POST(req, params) {

	const userRecipe = await req.json()

	dbConnect()

	const recipe = await Recipe.create(userRecipe)

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')
	return new Response(JSON.stringify({ recipe }))
}
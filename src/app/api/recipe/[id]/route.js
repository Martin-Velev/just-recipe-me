import dbConnect from '../../../../lib/dbConnect'
import Recipe from '../../../../models/recipe'

export async function GET(req, params) {

	console.log('param', params)
	const id = params.params.id
	if (!id) {
		return new Response(null, {
			status: 400,
			statusText: 'Bad Request',
		})
	}
	dbConnect()

	const recipe = await Recipe.findById(id)
	if(!recipe) {
		return new Response(null, {
			status: 404,
			statusText: 'Recipe Not Found'
		})
	}

	const headers = new Headers()
	headers.append('Content-Type', 'application/json')
	return new Response(JSON.stringify(recipe), {headers})
}

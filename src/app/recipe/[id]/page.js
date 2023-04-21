import Recipe from "@/app/components/Recipe"
import { API_ROOT } from "@/constants/constants"

export default async function RecipePage({ params }) {
	console.log('prar', params)

	const {id} = params
	const response = await fetch(`${API_ROOT}/recipe/${id}`, {cache: 'no-store'})
	const recipe = await response.json()
	console.log('rec', recipe)


	return <Recipe recipe={recipe} />
}

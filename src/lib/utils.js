export function slugRecipe(recipe) {
	const slug = recipe.name.replace(' ', '_').toLowerCase().trim()
	const { name, ingredients, instructions } = recipe
	return {
		id: slug,
		name,
		ingredients,
		instructions,
	}
}

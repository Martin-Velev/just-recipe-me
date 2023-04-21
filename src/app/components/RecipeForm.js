'use client'

import { API_ROOT } from '@/constants/constants'
import { useState } from 'react'

export default function RecipeForm() {
	const [recipe, setRecipe] = useState({ ingredients: [] })

	function addIngredient(ingredient) {
		let ingredients = recipe.ingredients || []
		ingredients.push(ingredient)
		setRecipe({ ...recipe, ingredients })
	}

	function handleNameChange(e) {
		setRecipe({
			...recipe,
			name: e.target.value,
		})
	}
	function handleIngredientChange(e, i) {
		let ingredients = recipe.ingredients
		ingredients[i] = e.target.value
		setRecipe({ ...recipe, ingredients })
	}

	function handleInstructionsChange(e) {
		setRecipe({ ...recipe, instructions: e.target.value })
	}

	async function submitRecipe() {
		const resp = await fetch(`${API_ROOT}/recipe/create`, {
			method: 'POST',
			body: JSON.stringify(recipe),
		})

		console.log('resp', resp)
	}

	return (
		<>
			<form>
				<label htmlFor="name">Name: </label>
				<input value={recipe.name || ''} onChange={handleNameChange} />
				<br />
				<label htmlFor="ingredients">Ingredients: </label>

				{recipe &&
					recipe.ingredients &&
					recipe.ingredients.length > 0 &&
					recipe.ingredients.map((ingredient, i) => (
						<>
							<br />
							<input
								placeholder="ingredient"
								key={i}
								value={ingredient}
								onChange={(e) => handleIngredientChange(e, i)}
							/>
						</>
					))}

				<br />
				<button type="button" onClick={(e) => addIngredient('')}>
					+
				</button>

				<br />
				<label htmlFor="instructions">Instructions: </label>
				<textarea
					value={recipe.instructions}
					onChange={handleInstructionsChange}
				/>
				<br />
				<button type="button" onClick={submitRecipe}>
					Submit
				</button>
			</form>
		</>
	)
}

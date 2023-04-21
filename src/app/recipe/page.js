'use client'
import { API_ROOT } from '@/constants/constants'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import RecipeList from '../components/RecipeList'

export default function RecipeRoot() {
	const [recipes, setRecipes] = useState()

	useEffect(() => {
		console.log('useEffect')
		async function fetchRecipes() {
			const res = await fetch(`${API_ROOT}/recipe`)
			const recipes = await res.json()
			console.log(recipes)
			setRecipes(recipes)
		}
		fetchRecipes()
	}, [])

	function handleSearch() {}
	return (
		<>
			<h2>Recipes: </h2>

			<input
				type="search"
				placeholder="search for recipe"
				onChange={handleSearch}
			/>

			{recipes && recipes.length > 0 && <RecipeList recipes={recipes} />}

			<section>
				<Link href="./recipe/create">Create a Recipe</Link>
			</section>
		</>
	)
}

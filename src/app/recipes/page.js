'use client'
import { API_ROOT } from '@/constants/constants'
import Link from 'next/link'
import Select from '../components/Select'
import { useEffect, useState } from 'react'
import RecipeList from '../components/RecipeList'

const LIMITS = [10, 20, 30, 50]

export default function RecipeRoot() {
	const [recipes, setRecipes] = useState()
	const [query, setQuery] = useState('')
	const [offset, setOffset] = useState(0)
	const [limit, setLimit] = useState(10)

	useEffect(() => {
		fetchRecipes(offset, limit)
	}, [])

	async function fetchRecipes(offset, limit) {
		const searchParams = new URLSearchParams()
		if (query) {
			searchParams.set('q', query)
		}
		searchParams.set('offset', offset)
		searchParams.set('limit', limit)

		const res = await fetch(`${API_ROOT}/recipes?${searchParams.toString()}`)
		const newRecipes = await res.json()
		if (recipes && recipes.length > 0 && offset !== 0) {
			setRecipes((recipes) => [...recipes, ...newRecipes])
		} else {
			setRecipes(newRecipes)
		}
	}

	function handleSearch(e) {
		setQuery(e.target.value)
		setOffset(0)

		if (e.key === 'Enter') {
			fetchRecipes(0, limit)
		}
	}

	function handleSubmit() {
		fetchRecipes(0, limit)
	}

	function loadMore() {
		setOffset((offset) => limit + offset)
		fetchRecipes(limit + offset, limit)
	}
	function handleLimitChange(e) {
		const newLimit = e.target.value
		setLimit(newLimit)
		if (offset === 0) {
			fetchRecipes(offset, newLimit)
		}
	}

	return (
		<>
		 <div className='flex w-2/3 justify-center mx-auto'>

			<input
				// value={query}
				onChange={handleSearch}
				onKeyDown={(e) => e.key == 'Enter' && handleSubmit()}
				className="w-full rounded-md border-0  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				type="search"
				placeholder="search for recipe"
			/>

			<div className="ml-2">
				<label className=" text-sm font-medium leading-6">
					# of recipes:
				</label>

				<select
					className="text-black"
					value={limit} // ...force the select's value to match the state variable...
					onChange={handleLimitChange} // ... and update the state variable on any change!
				>
					{LIMITS.map((limit) => (
						<option key={limit} value={limit}>{limit}</option>
					))}
				</select>
			</div>

		 </div>
			{recipes && recipes.length > 0 && <RecipeList recipes={recipes} />}

			{/* <section>
				<Link href="./recipe/create">Create a Recipe</Link>
			</section> */}

	 <div className='flex items-center'>

			<button
				className="mx-auto inline-flex items-center rounded-md bg-white px-10 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
				onClick={loadMore}
			>
				Load more
			</button>
	 </div>
		</>
	)
}

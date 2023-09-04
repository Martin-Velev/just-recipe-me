import Image from 'next/image'
import Link from 'next/link'

export default function RecipeList({ recipes }) {
	if (!recipes || recipes.length < 1) {
		return null
	}
	return (
		<ul role="list" className="flex-col divide-y divide-gray-100 w-1/2 mx-auto">
			{recipes &&
				recipes.length > 0 &&
				recipes.map((recipe, i) => (
					<li
						key={i + recipe.name}
						className="flex zmax-h-30 flex justify-around gap-x-6 py-5"
					>
						<Link className="flex w-full " href={`./recipe/${recipe._id}`}>
							<img
								alt="meal picture"
								src={recipe.img || '/plate-holder.jpg'}
								className="w-1/3  mx-5 flex-none bg-gray-50"
								// height={20}
							/>
							<div className="w-full">
								<h3 className="prose lg:prose-xl text-center text-sm font-semibold leading-6">
									{recipe.name}
								</h3>

								<ul
									style={{ maxHeight: '10rem' }}
									className="overscroll-contain overflow-y-auto "
								>
									{recipe.ingredients && recipe.ingredients.map((ingredient, i) => (
										<li key={recipe.name + i + ingredient}>
											<p className="prose prose-sm">{ingredient}</p>
										</li>
									))}
								</ul>
							</div>
						</Link>
					</li>
				))}
		</ul>
	)
}

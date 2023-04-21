import Image from 'next/image'
import Link from 'next/link'

export default function RecipeList({ recipes }) {
	return (
		<ul role="list" className=" divide-y divide-gray-100 w-1/2 mx-auto">
			{recipes.map((recipe) => (
				<li
					className="max-h-30 flex justify-around gap-x-6 py-5"
					key={recipe.name}
				>
					<Link className="flex w-full" href={`./recipe/${recipe._id}`}>
						<img
							alt="recipe img"
							src={recipe.img}
							className="mx-5 h-20 flex-none bg-gray-50"
							height={20}
						/>
						<div className="w-full">
							<h3 className="prose lg:prose-xl text-center text-sm font-semibold leading-6">
								{recipe.name}
							</h3>

							<ul
								style={{ maxHeight: '10rem' }}
								className=" overscroll-contain overflow-y-auto "
							>
								{recipe.ingredients.map((ingredient) => (
									<li>
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

export default function Recipe({ recipe }) {
	return (
		<>
			<h1 className="text-6xl text-center">{recipe.name}</h1>
			<img className="mx-auto" src={recipe.img || '/plate-holder.jpg'} />
			<hr />
			<div className="mx-auto w-3/4 ">
				<section className="my-2">
					<h2 className="text-2xl">Ingredients:</h2>
					<ul className="list-disc">
						{recipe.ingredients.map((ingr) => (
							<li key={ingr}>{ingr}</li>
						))}
					</ul>
				</section>

				<section className="my-2">
					<h2 className="text-2xl">Instructions:</h2>
					<ol className="list-decimal">
						{recipe.instructions.map((instr) => (
							<li key={instr}>{instr}</li>
						))}
					</ol>
				</section>
			</div>
		</>
	)
}

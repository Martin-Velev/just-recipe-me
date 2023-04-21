export default function Recipe({ recipe }) {
	return (
		<>
			<h1>{recipe.name}</h1>
			{recipe.img && <img src={recipe.img} />}
			<hr />
			<section>
				<h2>Ingredients:</h2>
				<ul>
					{recipe.ingredients.map((ingr) => (
						<li key={ingr}>{ingr}</li>
					))}
				</ul>
			</section>

			<section>
				<h2>Instructions:</h2>
				<ol>
					{recipe.instructions.map((instr) => (
						<li key={instr}>{instr}</li>
					))}
				</ol>
			</section>
		</>
	)
}

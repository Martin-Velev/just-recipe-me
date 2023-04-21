'use strict'
const RECIPES = require('../data/recipes.json')
const { default: mongoose, mongo } = require('mongoose')
const schema = new mongoose.Schema({
	name: {
		type: String,
		required: [true],
		unique: true,
	},
	img: {type: String},
	ingredients: {
		type: [String],
		required: [true],
	},
	instructions: {
		type: [String],
		required: [true],
	},
	time: {
		prepTime: { type: Number },
		cookTime: { type: Number },
	},
	yield: { type: Number },
	createdAt: {
		type: Date,
		default: Date.now,
	},
})

const Recipe = mongoose.model('Recipe', schema)

const DB_ROOT_URI = 'mongodb://localhost:27017'
const DB_COLLECTION = 'just-recipe-me'
const DB_URI_PARAMS = 'directConnection=true'

console.log(RECIPES.length)
async function seedDB() {
	await mongoose.connect(`${DB_ROOT_URI}/${DB_COLLECTION}?${DB_URI_PARAMS}`)

	// const recipes = RECIPES.slice(0, 10)

	const schemedRecipes = RECIPES.map((r) => {
		return {
			name: r.title,
			ingredients: [...r.ingredients],
			instructions: [...r.method],
			time: {
				prepTime: r.time.preparationMins * 60,
				cookTime: r.time.cookingMins * 60,
			},
			img: r.image
		}
	})
	await Recipe.insertMany(schemedRecipes)
	console.log("DB Seeded!")

	return
}

seedDB()

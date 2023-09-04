import mongoose from 'mongoose'

const recipeSchema = new mongoose.Schema({
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

export default mongoose.model('Recipe', recipeSchema)

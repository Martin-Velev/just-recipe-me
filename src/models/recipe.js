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

// const sanitizer = (doc) => {
// 	const { name, time, ingredients, instructions, createdAt } = doc
// 	const id = doc._id

// 	return {
// 		id,
// 		name,
// 		time,
// 		ingredients,
// 		instructions,
// 		createdAt,
// 	}
// }

// recipeSchema.pre('findOne', (doc, next) => {
// 	doc = sanitizer(doc)
// 	console.log('sanitized', doc)
// 	next()
// })

export default mongoose.model('Recipe', recipeSchema)

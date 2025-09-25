import mongoose from "mongoose";

const { Schema } = mongoose;

export default new Schema({
	name: { type: String, required: true },
	number: { type: Number, required: true }
});

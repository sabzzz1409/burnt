import mongoose from "mongoose";

export default new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true }
});
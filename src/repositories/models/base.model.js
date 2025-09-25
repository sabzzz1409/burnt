import mongoDb1 from "#databases/mongoDb1.js";
import baseSchema from "#schemas/base.schema.js";

const model = mongoDb1.model.bind(mongoDb1);
export default model("base", baseSchema, "base")

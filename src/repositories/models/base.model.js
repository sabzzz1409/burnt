import mongoDb1 from "#databases/mongoDb1.js";
import baseSchema from "#schemas/base.schema.js";

export default mongoDb1.model("base", baseSchema, "base")

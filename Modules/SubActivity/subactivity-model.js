const { Schema, model } = require("mongoose");
const { ObjectId } = Schema.Types;
const subactivitesSchema = new Schema(
  {
    name: { type: String, required: true },
    iscompleted: { type: Boolean, default: false, required: true },
    activity: { type: ObjectId, ref: "Activity", required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = new model("Subactivity", subactivitesSchema);

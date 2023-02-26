import mongoose from "mongoose";

const WebPromptSchema = new mongoose.Schema({
  work: {
    type: String,
    require: true,
  },
  template: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
    require: true,
  },
  webTone: {
    type: String,
    require: true,
  },
  advantages: [
    {
      type: String,
      require: true,
    },
  ],
  products: [
    {
      type: String,
      require: true,
    },
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Date,
  },
});

WebPromptSchema.pre("save", async function (next) {
  this._v = undefined;
  next();
});

export default mongoose.model("WebPrompt", WebPromptSchema);

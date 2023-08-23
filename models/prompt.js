import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "please enter your prompt "],
  },
  tag: {
    type: String,
    required: [true, "Please enter your tag"],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
import mongoose from "mongoose";

const WebDataSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    email: {
      type: String,
    },
    staticUrl: {
      type: String,
    },
    template: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      required: true,
    },
    imageKeyword: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    aboutMe: {
      title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
    },
    advantages: [
      {
        title: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
    products: [
      {
        title: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
    webImages: [
      {
        src: {
          type: String,
          required: true,
        },
        attribute: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

WebDataSchema.virtual("id").get(function () {
  return this._id;
});

WebDataSchema.pre(/^find/, async function (next) {
  this.select("-__v");
  next();
});

export default mongoose.model("WebData", WebDataSchema);

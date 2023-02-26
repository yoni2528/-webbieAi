import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import validator from "validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "a user most have email"],
    validate: [validator.isEmail, "Invalid email address"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "a user most have password"],
    select: false,
    min: 6,
    max: 20,
  },
  passwordConfirm: {
    type: String,
    required: [true, "a user most have password"],
    validate: {
      validator: function (passConfirm) {
        return this.password === passConfirm;
      },
      message: "passowrds must match",
    },
  },
});

userSchema.pre("save", async function (next) {
  const newPass = await bcrypt.hash(this.password, 11);
  this.password = newPass;
  this.passwordConfirm = undefined;
  next();
});

// eslint-disable-next-line prefer-arrow-callback
userSchema.pre(/^find/, async function (next) {
  next();
});

export default mongoose.model("User", userSchema);

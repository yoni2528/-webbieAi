import mongoose from "mongoose";
import app from "./app.js";

mongoose.connect(
  process.env.MONGO_URI.replace("<password>", process.env.MONGO_PASSWORD),
  () => {
    console.log("connected to MONGODB");
  }
);

app.listen(process.env.PORT, () => {
  console.log("listening on port 3000");
});

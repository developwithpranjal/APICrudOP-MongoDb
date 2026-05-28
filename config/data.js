import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


async function connect() {
  mongoose
    .connect(process.env.URl)
    .then(() => {
      console.log("DB Connection: OK, Server Running: OK");
    })
    .catch((err) => {
      console.log(err);
    });
}
export default connect;
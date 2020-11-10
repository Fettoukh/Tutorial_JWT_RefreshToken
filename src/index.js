import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.use(morgan("dev"));
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`server listen at port ${PORT}`);
});

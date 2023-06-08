import express from "express";
import router from "./routes/user-routes.mjs";
import dotenv from "dotenv";
import morgan from "morgan";
import dbConnection from "./config/database.mjs";
import blogRouter from "./routes/blog-routes.mjs";

dotenv.config({ path: "config.env" });
const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter)
app.get("/");

dbConnection();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "20kb" }));
if (process.env.NODE_ENV === "develpment") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

//Global handing error middleware

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`APP running on port ${PORT}`);
});

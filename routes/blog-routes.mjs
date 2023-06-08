import express from "express";
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  getById,
  getByIdAndRemove,
} from "../controllers/blog-controller.mjs";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", getByIdAndRemove);

export default blogRouter;

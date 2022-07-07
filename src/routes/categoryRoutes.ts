import {
  createCategory,
  deleteCategory,
  getCategories,
  getCategoryById,
  updateCategory,
} from "../controllers/categoryControllers";

import { Router } from "express";

const router = Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", createCategory);
router.put("/", getCategoryById);
router.delete("/:id", deleteCategory);

export default router;

import { Response, Request } from "express";
import { categoryModel } from "../Models/categoryModel";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryModel.findOne({ name: req.body.name });
    if (category)
      return res.status(400).json({ message: "this user already exists" });
    const newCategory = new categoryModel({ name: req.body.name });
    await newCategory.save();
    return res.status(200).json(newCategory);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const deletedCategory = await categoryModel.findByIdAndDelete(
      req.params.id,
      req.body
    );
    res.status(200).json(deletedCategory);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};
export const updateCategory = (res: Response, req: Request) => {
  console.log("updateCategory");
};

export const getCategoryById = async (req: Request, res: Response) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    res.status(200).json(category);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryModel.find();
    res.status(200).json(categories);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

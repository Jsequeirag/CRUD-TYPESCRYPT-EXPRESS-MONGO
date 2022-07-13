import { Response, Request } from "express";
import { productModel } from "../Models/productModel";
import { categoryModel } from "../Models/categoryModel";
export const createProduct = async (req: Request, res: Response) => {
  try {
    const product = await productModel.findOne({ name: req.body.name });
    if (product)
      return res.status(400).json({ message: "this product already exists" });
    const newProduct = new productModel(req.body);
    await newProduct.save();
    res.status(200).json(newProduct);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "server error" });
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  const deletedProduct = await productModel.findByIdAndRemove(req.params.id);
  console.log(deletedProduct);
  res.status(200).json(deletedProduct);
};

export const updateProduct = async (req: Request, res: Response) => {
  const product = await productModel.findById(req.params.id);
  console.log(product);
  if (!product)
    return res
      .status(400)
      .json({ message: "this product already doesn't exists" });
  const category = await categoryModel.findById(req.body.category);
  console.log(category);
  if (!category)
    return res
      .status(400)
      .json({ message: "this category already doesn't exists" });

  const updatedProduct = await productModel.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.status(200).json(updatedProduct);
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const products = await productModel.findById(req.params.id);
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "server error" });
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "server error" });
  }
};

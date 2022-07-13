import {
  getModelForClass,
  prop,
  modelOptions,
  Ref,
} from "@typegoose/typegoose";
import { Category } from "./categoryModel";
import { Schema } from "mongoose";

@modelOptions({ schemaOptions: { versionKey: false, timestamps: true } })
export class Product {
  @prop({ required: true })
  name: string;

  @prop({ required: true })
  description: string;

  @prop({ required: true })
  price: number;

  @prop({ required: true })
  quantity: number;

  @prop({ ref: () => Category, required: true, type: Schema.Types.ObjectId })
  category: Ref<Category>;
}

export const productModel = getModelForClass(Product);

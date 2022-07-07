import { getModelForClass, prop, modelOptions } from "@typegoose/typegoose";
@modelOptions({ schemaOptions: { versionKey: false, timestamps: true } })
export class Category {
  @prop({ required: true, unique: true })
  name: string;
}

export const categoryModel = getModelForClass(Category);

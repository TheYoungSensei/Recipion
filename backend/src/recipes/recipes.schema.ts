import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe {
  @Prop()
  title: string;

  @Prop()
  stars: number;

  @Prop()
  subTitle: string;

  @Prop()
  coverImage: string;

  @Prop()
  text: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

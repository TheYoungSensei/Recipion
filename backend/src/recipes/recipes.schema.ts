import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RecipeDocument = HydratedDocument<Recipe>;

@Schema()
export class Recipe {
  @Prop({ required: true })
  title: string;

  @Prop()
  stars: number;

  @Prop({ required: true })
  subTitle: string;

  @Prop()
  coverImage: string;

  @Prop()
  text: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);

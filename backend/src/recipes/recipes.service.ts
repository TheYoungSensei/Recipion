import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Recipe } from './recipes.schema';
import { Model } from 'mongoose';

@Injectable()
export class RecipesService {
  constructor(@InjectModel(Recipe.name) private recipeModel: Model<Recipe>) {}

  async create(recipe): Promise<Recipe> {
    const created = new this.recipeModel(recipe);
    return created.save();
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipeModel.find().exec();
  }

  async findById(id: string): Promise<Recipe | null> {
    return this.recipeModel.findById(id);
  }

  async delete(id: string): Promise<Recipe | null> {
    return this.recipeModel.findOneAndDelete({ _id: id });
  }
}

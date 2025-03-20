import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Recipe, RecipeSchema } from "./recipes.schema";
import { RecipesService } from './recipes.service'
import { RecipesController } from "./recipes.controller";

@Module({
  imports: [MongooseModule.forFeature([{ name: Recipe.name, schema: RecipeSchema }])],
  controllers: [RecipesController],
  providers: [RecipesService]
})
export class RecipesModule {}

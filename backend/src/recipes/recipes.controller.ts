import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.schema';
import { CreateRecipeDto } from './recipes.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  findAll(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }

  @Post()
  create(@Body() recipeDto: CreateRecipeDto): Promise<Recipe | null> {
    return this.recipesService.create(recipeDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const recipe = await this.recipesService.findById(id);
    if (!recipe) {
      throw new HttpException(
        `Recipe with id ${id} does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    return this.recipesService.delete(id);
  }
}

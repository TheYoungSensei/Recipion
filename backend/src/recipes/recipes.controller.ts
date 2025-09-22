import { Controller, Get } from '@nestjs/common';

import { RecipesService } from './recipes.service';
import { Recipe } from './recipes.schema';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  findAll(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }
}

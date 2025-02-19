from django.urls import path

from .controllers.recipe_controller import get_recipes, recipe

urlpatterns = [
  path('recipes', get_recipes, name='get_recipe'),
  path('recipes/<int:id>', recipe, name='recipe')
]
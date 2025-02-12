from django.urls import path

from .views import get_recipes, create_recipe, recipe

urlpatterns = [
  path('recipes', get_recipes, name = 'get_recipe'),
  path('recipes/create', create_recipe, name='create_recipe'),
  path('recipes/<int:id>', recipe, name='recipe')
]
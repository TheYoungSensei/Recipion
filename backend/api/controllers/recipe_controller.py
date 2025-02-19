from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from ..models.recipe import Recipe
from ..serializer import RecipeSerializer

@api_view(['GET'])
def get_recipes(request):
  recipes = Recipe.objects.all()
  serializer = RecipeSerializer(recipes, many=True)
  return Response(serializer.data)

def get_recipe(recipe):
  serializer = RecipeSerializer(recipe)
  return Response(serializer.data)

def create_recipe(recipe):
  serializer = RecipeSerializer(data=recipe)
  if (serializer.is_valid()):
    serializer.save()
    return Response(serializer.data, status = status.HTTP_201_CREATED)
  return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

def update_recipe(recipe):
  serializer = RecipeSerializer(recipe, data=recipe)
  if serializer.is_valid():
    serializer.save()
    return Response(serializer.data)
  return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def delete_recipe(recipe):
  recipe.delete()
  return Response(status=status.HTTP_204_NO_CONTENT)
 
@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def recipe(request, id):
  if request.method == 'POST':
    return create_recipe(request.data)
  
  # At this point recipe should exist.
  try:
    recipe = Recipe.objects.get(pk=id)
  except Recipe.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  
  if request.method == 'GET':
    return get_recipe(recipe)
  
  if request.method == 'PUT':
    return update_recipe(request.data)
  
  if request.method == 'DELETE':
    return delete_recipe(recipe)
  
  return Response(status=status.HTTP_405_METHOD_NOT_ALLOWED)


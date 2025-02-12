from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Recipe
from .serializer import RecipeSerializer

# Create your views here.
@api_view(['GET'])
def get_recipes(request):
  recipes = Recipe.objects.all()
  serializer = RecipeSerializer(recipes, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def create_recipe(request):
  serializer = RecipeSerializer(data=request.data)
  if (serializer.is_valid()):
    serializer.save()
    return Response(serializer.data, status = status.HTTP_201_CREATED)
  return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def recipe(request, id):
  try:
    recipe = Recipe.objects.get(pk=id)
  except Recipe.DoesNotExist:
    return Response(status=status.HTTP_404_NOT_FOUND)
  
  if request.method == 'GET':
    serializer = RecipeSerializer(recipe)
    return Response(serializer.data)
  
  if request.method == 'PUT':
    serializer = RecipeSerializer(recipe, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  if request.method == 'DELETE':
    recipe.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
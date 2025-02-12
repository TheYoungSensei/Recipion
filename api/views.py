from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Recipe
from .serializer import RecipeSerializer

# Create your views here.
@api_view(['GET'])
def get_recipe(request):
  return Response(RecipeSerializer({ 'stars': 3, 'title': 'Hello World!' }).data)
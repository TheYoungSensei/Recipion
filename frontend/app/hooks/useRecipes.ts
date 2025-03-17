import { useQuery } from "@tanstack/react-query"
import { Recipe } from '../types/Recipe'

const fetchRecipes = async (): Promise<Array<Recipe>> => {
  const response = await fetch('http://127.0.0.1:8000/api/recipes')
  const data = await response.json()
  return data
}

const useRecipes = () => {
  return useQuery({
    queryKey: ['recipes'],
    queryFn: () => fetchRecipes(),
  })
}

const fetchRecipe = async (id: string): Promise<Recipe> => {
  const response = await fetch(`http://127.0.0.1:8000/api/recipes/${id}`)
  const data = await response.json()
  return data
}

const useRecipe = (id: string) => {
  return useQuery({
    queryKey: [`recipe/${id}`],
    queryFn: () => fetchRecipe(id),
  })
}

export { 
  useRecipes,
  useRecipe,
  fetchRecipes,
  fetchRecipe,
}
import { useQuery } from "@tanstack/react-query"
import { Recipe } from '../types/Recipe'
import { convertRecipe, URecipe } from "../factories/recipe.factory"

import { MockFetchRecipes } from "../../mocks" 

const __fetchRecipes = async () => {
  console.log(process.env.NEXT_PUBLIC_USE_API)
  if (process.env.NEXT_PUBLIC_USE_API === 'true') {
    const response = await fetch('http://127.0.0.1:8000/api/recipes')
    return response.json()
  }
  return MockFetchRecipes
}

const fetchRecipes = async (): Promise<Array<Recipe>> => {
  const data = await __fetchRecipes()
  console.log(data)
  const formatted = data.map((recipe: URecipe) => convertRecipe(recipe))
  return formatted
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
  const formatted =  convertRecipe(data)
  return formatted
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
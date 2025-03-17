"use client"

import Recipe from '../components/recipes/Recipe'

const RecipeContainer = ({ id }: { id: string }) => {

  return <Recipe id={id} />
}

export default RecipeContainer

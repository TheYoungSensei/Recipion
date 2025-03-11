"use client"

import { useRecipe } from "../hooks/useRecipes"

const Recipe = ({ id }) => {
  const { data, isPending, isFetching } = useRecipe(id)

  return (
    <p>{JSON.stringify(data)}</p>
  )
}

export default Recipe

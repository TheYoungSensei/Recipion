"use client"

import { useRecipe } from "../../hooks/useRecipes"

type TProps = {
  id: string
}

const Recipe = ({ id }: TProps) => {
  const { data } = useRecipe(id)

  return (
    <p>{JSON.stringify(data)}</p>
  )
}

export default Recipe

"use client";

import React from 'react'
import { useRecipes } from '../hooks/useRecipes'

const RecipeList = ({ }) => {
  const { data, isPending, isFetching } = useRecipes()
  console.log(data)

  return <div>
    <ul>
      {data?.map((recipe) => <li key={recipe.id}>{recipe.title}</li>)}
    </ul>
  </div>
}

export default RecipeList

"use client"

import { useRouter } from 'next/navigation'

import RecipeList from "../components/recipes/RecipeList"

const RecipeListContainer = ({}) => {
  const router = useRouter()

  const handleOnDetails = (id: string) => {
    router.push(`recipes/${id}`)
  }

  return <RecipeList onDetails={handleOnDetails} />
}

export default RecipeListContainer
import { QueryClient, dehydrate } from "@tanstack/react-query"

import RecipeListContainer from "../ui/RecipesContainer"
import { fetchRecipes } from "../hooks/useRecipes"

export default async function Page() {
  return <RecipeListContainer />
}

export async function generateStaticParams() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['recipes'],
    queryFn: () => fetchRecipes()
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    }
  }
}
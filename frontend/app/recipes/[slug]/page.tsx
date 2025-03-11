import RecipeContainer from '../../ui/RecipeContainer'

export default async  function Page({ params } : {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <RecipeContainer id={slug} />
}
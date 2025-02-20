
export default async function Page() {
  const data = await fetch('http://127.0.0.1:8000/api/recipes')
  console.log(data)
  const recipes = data && await data.json()
 
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>{recipe.title}</li>
      ))}
    </ul>
  )
}
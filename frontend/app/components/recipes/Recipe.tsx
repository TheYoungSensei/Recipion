import { Text, Title } from '@mantine/core'
import { useRecipe } from "../../hooks/useRecipes"

type TProps = {
  id: string
}

const Recipe = ({ id }: TProps) => {
  const { data } = useRecipe(id)

  return (
    <div style={{ marginLeft: 16, marginRight: 16 }}>
      <Title order={1}>{data?.title}</Title>
      <Text style={{ marginTop: 8 }} c='dimmed'>{data?.subTitle}</Text>
    </div>
  )
}

export default Recipe

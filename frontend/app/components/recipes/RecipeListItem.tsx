
import React from 'react'
import { Group, Card, Text, Button, Image } from '@mantine/core'

import PastryIcon from '../icons/PastryIcon';
import { Recipe } from '../../types/Recipe';

type TProps = {
  recipe: Recipe
  onDetails: (id: string) => void
}

const RecipeListItem = ({ recipe, onDetails }: TProps) => {
  if (!recipe) return null
  console.log(recipe)
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {recipe.coverImage && <Card.Section>
        <Image
          src={`http://127.0.0.1:8000${recipe.coverImage}`}
          
          alt={recipe.title}
        />
      </Card.Section>}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{recipe.title}</Text>
        <PastryIcon />
      </Group>
      <Text size="sm" c="dimmed">
        {recipe.subTitle}
      </Text>
      <Button
        variant="gradient"
        gradient={{ from: 'blue', to: 'violet', deg: 90 }}
        fullWidth mt="md"
        radius="md"
        onClick={() => onDetails(recipe.id)}
      >
        Go to details
      </Button>
    </Card>
  )
}

export default RecipeListItem

import React from 'react'
import { Group, Card, Text, Button, Image } from '@mantine/core'

import PastryIcon from '../icons/PastryIcon';
import { Recipe } from '../../types/Recipe';

type TProps = {
  recipe: Recipe
  onDetails: (id: string) => void
}

const RecipeListItem = ({ recipe, onDetails }: TProps) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {recipe.cover_image && <Card.Section>
        <Image
          src={`http://127.0.0.1:8000${recipe.cover_image}`}
          
          alt={recipe.title}
        />
      </Card.Section>}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{recipe.title}</Text>
        <PastryIcon />
      </Group>
      <Text size="sm" c="dimmed">
        {recipe.text}
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
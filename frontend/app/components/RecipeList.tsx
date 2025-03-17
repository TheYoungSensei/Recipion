"use client";

import React from 'react'
import { Grid, Group, Card, Text, Button, Image } from '@mantine/core'

import { useRecipes } from '../hooks/useRecipes'
import PastryIcon from './icons/PastryIcon';

const Recipe = ({ title, id, text, onDetails, cover_image }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {cover_image && <Card.Section>
        <Image
          src={`http://127.0.0.1:8000${cover_image}`}
          
          alt={title}
        />
      </Card.Section>}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
        <PastryIcon />
      </Group>
      <Text size="sm" c="dimmed">
        {text}
      </Text>
      <Button color="blue" fullWidth mt="md" radius="md" onClick={() => onDetails(id)}>
        Go to details
      </Button>
    </Card>
  )
}

const RecipeList = ({ onDetails }) => {
  const { data, isPending, isFetching } = useRecipes()

  return (
    <Grid style={{ marginRight: 16, marginLeft: 16 }}>
      {data?.map((recipe) => <Grid.Col span={3} key={recipe.id}><Recipe {...recipe} onDetails={onDetails} /></Grid.Col>)}
    </Grid>
  )
}

export default RecipeList
"use client";

import React from 'react'
import { Grid, Card, Text, Button } from '@mantine/core'

import { useRecipes } from '../hooks/useRecipes'

const Recipe = ({ title, id, text, onDetails }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text fw={500}>{title}</Text>
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
      {data?.map((recipe) => <Grid.Col span={2} key={recipe.id}><Recipe {...recipe} onDetails={onDetails} /></Grid.Col>)}
    </Grid>
  )
}

export default RecipeList
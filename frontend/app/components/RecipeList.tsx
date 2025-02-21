"use client";

import React from 'react'
import { Grid, Card, Text, Button } from '@mantine/core'

import { useRecipes } from '../hooks/useRecipes'

const Recipe = ({ title, id, text }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Text fw={500}>{title}</Text>
      <Text size="sm" c="dimmed">
        {text}
      </Text>
      <Button color="blue" fullWidth mt="md" radius="md">
        Go to details
      </Button>
    </Card>
  )
}

const RecipeList = ({ }) => {
  const { data, isPending, isFetching } = useRecipes()

  return (
    <Grid>
      {data?.map((recipe) => <Grid.Col span={2} key={recipe.id}><Recipe {...recipe} /></Grid.Col>)}
    </Grid>
  )
}

export default RecipeList
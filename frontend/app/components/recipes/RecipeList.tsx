"use client";

import React from 'react'
import { Grid } from '@mantine/core'

import { useRecipes } from '../../hooks/useRecipes'
import RecipeListItem from './RecipeListItem';

type TProps = {
  onDetails: (id: string) => void
}

const RecipeList = ({ onDetails }: TProps) => {
  const { data } = useRecipes()

  return (
    <Grid style={{ marginRight: 16, marginLeft: 16 }}>
      {data?.map((recipe) => (
        <Grid.Col span={3} key={recipe.id}>
          <RecipeListItem onDetails={onDetails} recipe={recipe} />
        </Grid.Col>
      ))}
    </Grid>
  )
}

export default RecipeList
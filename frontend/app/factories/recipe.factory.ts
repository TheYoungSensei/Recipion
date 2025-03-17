import { Recipe } from "../types/Recipe";

export type URecipe = {
  title: string
  sub_title: string
  id: string
  text: string
  cover_image?: string
}

export const convertRecipe = (uRecipe: URecipe): Recipe => {
  return {
    id: uRecipe.id,
    title: uRecipe.title,
    subTitle: uRecipe.sub_title,
    text: uRecipe.text,
    coverImage: uRecipe.cover_image
  }
}
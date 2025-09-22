import { IsNotEmpty } from 'class-validator';

export class CreateRecipeDto {
  @IsNotEmpty()
  title: string;

  stars: number;

  @IsNotEmpty()
  subTitle: string;

  coverImage: string;

  text: string;
}

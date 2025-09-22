import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://sacrechristopher:2c1DPnr6hg6t6Hwb@recipion.zdpj6.mongodb.net/?retryWrites=true&w=majority&appName=recipion',
    ),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

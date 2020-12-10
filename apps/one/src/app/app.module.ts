import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {NestRabbitClientModule} from "@rabbit/nest-rabbit-client";

@Module({
  imports: [NestRabbitClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

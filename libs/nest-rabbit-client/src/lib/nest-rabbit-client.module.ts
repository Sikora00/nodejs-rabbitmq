import { Module } from '@nestjs/common';
import {ClientsModule, Transport} from '@nestjs/microservices';


@Module({
  imports: [    ClientsModule.register([
    {
      name: 'RABBIT_CONSUMERS',
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'cats_queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ])],
  providers: [],
  exports: [ClientsModule],
})
export class NestRabbitClientModule {}

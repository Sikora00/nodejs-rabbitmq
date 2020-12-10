import {Module} from '@nestjs/common';
import {RabbitMQModule} from "@golevelup/nestjs-rabbitmq";


@Module({
  imports: [        RabbitMQModule.forRoot(RabbitMQModule, {
    exchanges: [
      {
        name: 'exchange1',
        type: 'topic',
      },
    ],
    uri: 'amqp://localhost:5672',
  }),],
  providers: [],
  exports: [RabbitMQModule],
})
export class NestRabbitClientModule {}

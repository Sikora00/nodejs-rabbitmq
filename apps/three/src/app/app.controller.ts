import {Controller, Get, Inject, Post} from '@nestjs/common';
import {AmqpConnection, RabbitRPC} from "@golevelup/nestjs-rabbitmq";

@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Post()
  createSite(): Promise<void> {
    return this.amqpConnection.publish('exchange1', 'subscribe-route', { msg: 'hello world' });
  }

}

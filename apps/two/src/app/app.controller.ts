import {Controller, Get} from '@nestjs/common';
import {AmqpConnection, RabbitSubscribe} from "@golevelup/nestjs-rabbitmq";

@Controller()
export class AppController {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  @Get()
  getData() {
    return this.amqpConnection.request({
      exchange: 'exchange1',
      routingKey: 'GetSites',
      payload: {
        request: 'val',
      }
    });
  }

  @Get('user')
  getUserData() {
    return this.amqpConnection.request({
      exchange: 'exchange1',
      routingKey: 'GetUsers',
      payload: {
        request: 'val',
      }
    });
  }
}

import { Injectable } from '@nestjs/common';
import {RabbitSubscribe} from "@golevelup/nestjs-rabbitmq";

@Injectable()
export class AppService {

  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'subscribe-route',
  })
  async handleUserCreated(data: Record<string, unknown>) {
    console.log(data)
  }
}

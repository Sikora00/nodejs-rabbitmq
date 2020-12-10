import { Injectable } from '@nestjs/common';
import {RabbitRPC} from "@golevelup/nestjs-rabbitmq";

@Injectable()
export class AppService {

  @RabbitRPC({
    exchange: 'exchange1',
    routingKey: 'GetSites',
    queue: 'rpc-queue',
  })
  getData() {
    return ['Site1']
  }


  @RabbitRPC({
    exchange: 'exchange1',
    routingKey: 'GetUsers',
    queue: 'rpc-queue',
  })
  getUserData() {
    return ['User1']
  }
}

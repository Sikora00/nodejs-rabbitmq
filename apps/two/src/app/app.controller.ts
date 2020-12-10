import { Controller, Get, Inject } from '@nestjs/common';
import {ClientProxy, EventPattern} from '@nestjs/microservices';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,   @Inject('RABBIT_CONSUMERS') private client: ClientProxy,) {}

  @Get()
  getData() {
    return this.client.send({cmd: 'GetSites'}, {})
  }

  @EventPattern('SiteCreated')
  async handleUserCreated(data: Record<string, unknown>) {
    console.log(data)
  }
}

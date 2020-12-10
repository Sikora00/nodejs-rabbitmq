import {Controller, Get, Inject, Post} from '@nestjs/common';

import { AppService } from './app.service';
import {ClientProxy, MessagePattern} from "@nestjs/microservices";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,   @Inject('RABBIT_CONSUMERS') private client: ClientProxy,) {}

  @Post()
  createSite(): Promise<void> {
    this.client.emit('SiteCreated', {name: 'Site2'}).subscribe();
    return Promise.resolve()
  }
  @MessagePattern({cmd: 'GetSites'})
  getData() {
    return ['Site1']
  }
}
